"use client";

import { useId, useState, type FormEvent } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
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
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = "Introduceți o adresă de e-mail validă.";
  if (v.message.trim().length < 10) errors.message = "Descrieți pe scurt lucrarea sau materialele necesare.";
  return errors;
}

const fieldClass =
  "w-full rounded-sm border border-ink/25 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-concrete/80 transition-[border-color,box-shadow] duration-200 hover:border-ink/45 focus:border-ink focus:outline-none focus:ring-2 focus:ring-brand/40";

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
      <div className="flex min-h-[420px] flex-col justify-center border border-ink/15 bg-white p-8 sm:p-12" role="status" aria-live="polite">
        <span className="inline-flex size-12 items-center justify-center bg-brand text-white">
          <Check weight="bold" className="size-6" aria-hidden />
        </span>
        <h2 className="mt-8 font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
          Mesajul a fost trimis.
        </h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-concrete">
          Mulțumim, {values.name.trim().split(" ")[0]}. Revenim cu o ofertă în cel mai scurt timp.
        </p>
        {!contact.formEndpoint && (
          <p className="mt-6 text-[13px] text-concrete">
            Formularul rulează în mod demonstrativ până la conectarea unui serviciu de e-mail.
          </p>
        )}
        <div className="mt-10">
          <Button
            type="button"
            variant="outline-dark"
            onClick={() => {
              setValues(empty);
              setTouched({});
              setErrors({});
              setStatus("idle");
            }}
          >
            Trimite alt mesaj
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
      className: cn(fieldClass, error && "border-brand focus:ring-brand/40"),
    };
    return (
      <div className={cn("flex flex-col gap-2", opts.textarea && "sm:col-span-2")}>
        <label htmlFor={id} className="flex items-baseline justify-between font-display text-sm font-semibold">
          {label}
          {opts.optional && <span className="text-[12px] font-medium text-concrete">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={6} {...shared} />
        ) : (
          <input type={opts.type ?? "text"} {...shared} />
        )}
        {error && (
          <p id={`${id}-error`} className="text-[13px] text-brand-deep">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="border border-ink/15 bg-white p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        {field("name", "Nume", { autoComplete: "name", placeholder: "Numele și prenumele" })}
        {field("company", "Companie", { optional: true, autoComplete: "organization", placeholder: "Denumirea firmei" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("email", "E-mail", { type: "email", autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("message", "Mesaj", {
          textarea: true,
          placeholder: "Tipul lucrării, locația, materialele și cantitățile estimate, termenul dorit.",
        })}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 border border-brand/40 bg-brand/5 px-4 py-3 text-[14px] text-brand-deep">
          Mesajul nu a putut fi trimis. Încercați din nou sau contactați-ne telefonic.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="brand" size="lg" arrow disabled={status === "submitting"} aria-busy={status === "submitting"}>
          {status === "submitting" ? "Se trimite..." : "Trimite cererea"}
        </Button>
        <p className="text-[13px] leading-relaxed text-concrete">
          Datele sunt folosite exclusiv pentru a răspunde solicitării dumneavoastră.
        </p>
      </div>
    </form>
  );
}
