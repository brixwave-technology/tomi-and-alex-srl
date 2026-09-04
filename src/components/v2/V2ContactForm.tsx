"use client";

import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "h-12 w-full border border-white/15 bg-carbon-950 px-4 text-[15px] text-white placeholder:text-steel-500 transition focus:border-electric focus:outline-none";

export function V2ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="v2-corners flex min-h-[460px] flex-col justify-center border border-white/10 bg-carbon-800 p-8 sm:p-12" role="status" aria-live="polite">
        <CheckCircle weight="fill" className="size-10 text-electric" aria-hidden />
        <p className="mt-6 font-v2-mono text-[11px] uppercase tracking-[0.24em] text-steel-300">Solicitare înregistrată</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Vă mulțumim, {form.firstName}.</h3>
        <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-steel-300">
          Solicitarea a fost transmisă departamentului de ofertare. Veți fi contactat în aceeași zi lucrătoare la numărul indicat.
        </p>
        <button type="button" onClick={form.reset} className="mt-10 inline-flex h-11 w-fit items-center border border-white/20 px-6 text-[13.5px] font-semibold text-white transition hover:bg-white/5">
          Transmiteți o altă solicitare
        </button>
      </div>
    );
  }

  const field = (
    key: keyof ContactValues,
    label: string,
    opts: { type?: string; optional?: boolean; autoComplete?: string; textarea?: boolean; placeholder?: string; select?: boolean; className?: string } = {},
  ) => {
    const { error, errorId, ...props } = form.fieldProps(key);
    return (
      <div className={cn("flex flex-col gap-2", opts.className)}>
        <label htmlFor={props.id} className="flex items-baseline justify-between font-v2-mono text-[11px] uppercase tracking-[0.2em] text-steel-300">
          {label}
          {opts.optional && <span className="text-[10px] normal-case tracking-normal text-steel-500">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={6} placeholder={opts.placeholder} {...props} className={cn(input, "h-auto py-3", error && "border-red-400")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, error && "border-red-400")}>
            <option value="">Selectați tipul solicitării</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input type={opts.type ?? "text"} autoComplete={opts.autoComplete} placeholder={opts.placeholder} {...props} className={cn(input, error && "border-red-400")} />
        )}
        {error && (
          <p id={errorId} className="text-[13px] text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate className="v2-corners border border-white/10 bg-carbon-800 p-6 sm:p-10">
      <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
        <p className="font-v2-mono text-[11px] uppercase tracking-[0.24em] text-steel-300">Formular de solicitare · F-01</p>
        <p className="font-v2-mono text-[11px] uppercase tracking-[0.24em] text-electric">Răspuns în 24 h</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Nume și prenume", { autoComplete: "name", placeholder: "Persoana de contact" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie / instituție", { optional: true, autoComplete: "organization", placeholder: "Denumirea beneficiarului" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("subject", "Tipul solicitării", { select: true, optional: true, className: "sm:col-span-2" })}
        {field("message", "Descrierea lucrării sau a comenzii", {
          textarea: true,
          placeholder: "Obiectivul, amplasamentul, materialele și cantitățile estimate, termenul de execuție.",
          className: "sm:col-span-2",
        })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-6 border border-red-400/50 bg-red-400/10 px-4 py-3 text-[14px] text-red-200">
          Solicitarea nu a putut fi transmisă. Reîncercați sau apelați dispeceratul la {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 bg-electric px-7 text-[14px] font-semibold text-white transition hover:bg-electric-soft disabled:opacity-60"
        >
          {form.status === "submitting" ? "Se transmite..." : "Transmiteți solicitarea"}
          <ArrowRight weight="bold" className="size-4" aria-hidden />
        </button>
        <p className="text-[12.5px] leading-relaxed text-steel-500">Datele sunt prelucrate exclusiv pentru formularea ofertei.</p>
      </div>
    </form>
  );
}
