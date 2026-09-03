"use client";

import { useId, useState, type FormEvent } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { PhoneCTA } from "@/components/ui/PhoneCTA";
import { contact } from "@/data/site";
import { cn } from "@/lib/cn";

type Values = { name: string; company: string; phone: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const empty: Values = { name: "", company: "", phone: "", email: "", message: "" };

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Introduceți numele dumneavoastră.";
  if (!/^[+\d][\d\s().-]{6,}$/.test(v.phone.trim())) errors.phone = "Introduceți un număr de telefon valid.";
  if (v.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = "Introduceți o adresă de e-mail validă.";
  if (v.message.trim().length < 10) errors.message = "Descrieți pe scurt lucrarea sau materialele necesare.";
  return errors;
}

const fieldClass =
  "w-full rounded-sm border border-chalk/25 bg-asphalt px-4 py-3 text-[15px] text-chalk placeholder:text-concrete transition-[border-color,box-shadow] duration-200 hover:border-chalk/45 focus:border-chalk focus:outline-none focus:ring-2 focus:ring-brand/50";

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (key: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Values) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, company: true, phone: true, email: true, message: true });
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`${uid}-${first}`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Demo mode: no backend is connected yet.
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[420px] flex-col justify-center border border-chalk/15 bg-graphite p-8 sm:p-12" role="status" aria-live="polite">
        <span className="inline-flex size-12 items-center justify-center bg-brand text-white">
          <Check weight="bold" className="size-6" aria-hidden />
        </span>
        <h2 className="display mt-8 text-3xl sm:text-4xl">Cererea a fost trimisă.</h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ash">
          Mulțumim, {values.name.trim().split(" ")[0]}. Vă sunăm noi înapoi cu o ofertă.
        </p>
        {!contact.formEndpoint && (
          <p className="mt-6 text-[13px] text-concrete">
            Formularul rulează în mod demonstrativ până la conectarea unui serviciu de e-mail.
          </p>
        )}
        <div className="mt-10">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setValues(empty);
              setTouched({});
              setErrors({});
              setStatus("idle");
            }}
          >
            Trimite altă cerere
          </Button>
        </div>
      </div>
    );
  }

  const field = (
    key: keyof Values,
    label: string,
    opts: { type?: string; optional?: boolean; autoComplete?: string; textarea?: boolean; placeholder?: string } = {},
  ) => {
    const id = `${uid}-${key}`;
    const error = touched[key] ? errors[key] : undefined;
    const shared = {
      id,
      name: key,
      value: values[key],
      onChange: set(key),
      onBlur: blur(key),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${id}-error` : undefined,
      autoComplete: opts.autoComplete,
      placeholder: opts.placeholder,
      className: cn(fieldClass, error && "border-brand"),
    };
    return (
      <div className={cn("flex flex-col gap-2", opts.textarea && "sm:col-span-2")}>
        <label htmlFor={id} className="flex items-baseline justify-between text-sm font-semibold text-chalk">
          {label}
          {opts.optional && <span className="text-[12px] font-medium text-concrete">opțional</span>}
        </label>
        {opts.textarea ? <textarea rows={6} {...shared} /> : <input type={opts.type ?? "text"} {...shared} />}
        {error && (
          <p id={`${id}-error`} className="text-[13px] text-brand-soft">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="border border-chalk/15 bg-graphite p-6 sm:p-10">
      <div className="mb-8 flex flex-col gap-4 border-b border-chalk/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] leading-relaxed text-ash">Cel mai rapid: sunați-ne direct.</p>
        <PhoneCTA size="md" showNumber />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {field("name", "Nume", { autoComplete: "name", placeholder: "Numele și prenumele" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie", { optional: true, autoComplete: "organization", placeholder: "Denumirea firmei" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("message", "Ce aveți nevoie", {
          textarea: true,
          placeholder: "Tipul lucrării, locația, materialele și cantitățile estimate, termenul dorit.",
        })}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 border border-brand/50 bg-brand/10 px-4 py-3 text-[14px] text-brand-soft">
          Cererea nu a putut fi trimisă. Încercați din nou sau sunați-ne.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="brand" size="lg" arrow disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? "Se trimite..." : "Trimite cererea"}
        </Button>
        <p className="text-[13px] leading-relaxed text-concrete">Datele sunt folosite exclusiv pentru a vă răspunde.</p>
      </div>
    </form>
  );
}
