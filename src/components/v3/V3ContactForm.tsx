"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "w-full border-0 border-b border-granite-500/50 bg-transparent px-0 py-4 text-[16px] text-limestone placeholder:text-granite-500 transition-colors duration-500 focus:border-brand-soft focus:outline-none";

export function V3ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="flex min-h-[460px] flex-col justify-center" role="status" aria-live="polite">
        <span className="v3-rule w-16" aria-hidden />
        <h3 className="v3-display mt-8 font-v3-display text-4xl text-limestone sm:text-5xl">Vă mulțumim, {form.firstName}.</h3>
        <p className="mt-6 max-w-md text-[15.5px] leading-relaxed text-granite-300">
          Solicitarea a fost înregistrată. Un responsabil de ofertare vă va contacta în aceeași zi lucrătoare.
        </p>
        <button type="button" onClick={form.reset} className="v3-link mt-10 w-fit text-[11.5px] font-medium uppercase tracking-[0.22em] text-brand-soft">
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
      <div className={cn("flex flex-col", opts.className)}>
        <label htmlFor={props.id} className="flex items-baseline justify-between text-[11px] font-medium uppercase tracking-[0.22em] text-granite-300">
          {label}
          {opts.optional && <span className="text-[10px] normal-case tracking-normal text-granite-500">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={4} placeholder={opts.placeholder} {...props} className={cn(input, "resize-none", error && "border-brand-soft")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, "appearance-none [&>option]:bg-anthracite-900", error && "border-brand-soft")}>
            <option value="">Selectați</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input type={opts.type ?? "text"} autoComplete={opts.autoComplete} placeholder={opts.placeholder} {...props} className={cn(input, error && "border-brand-soft")} />
        )}
        {error && (
          <p id={errorId} className="mt-2 text-[13px] text-brand-soft">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {field("name", "Nume și prenume", { autoComplete: "name", placeholder: "Persoana de contact" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie", { optional: true, autoComplete: "organization", placeholder: "Denumirea beneficiarului" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("subject", "Obiectul solicitării", { select: true, optional: true, className: "sm:col-span-2" })}
        {field("message", "Mesaj", { textarea: true, placeholder: "Obiectivul, amplasamentul, cantitățile estimate, termenul.", className: "sm:col-span-2" })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-8 border-l border-brand pl-4 text-[14px] text-brand-soft">
          Solicitarea nu a putut fi transmisă. Reîncercați sau apelați {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="group inline-flex h-14 items-center justify-center gap-4 border border-brand bg-brand px-8 text-[11.5px] font-medium uppercase tracking-[0.22em] text-anthracite-950 transition-all duration-500 hover:bg-brand-soft disabled:opacity-60"
        >
          {form.status === "submitting" ? "Se transmite" : "Transmiteți solicitarea"}
          <ArrowRight weight="regular" className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
        </button>
        <p className="text-[12.5px] leading-relaxed text-granite-500">Datele sunt prelucrate exclusiv pentru formularea ofertei.</p>
      </div>
    </form>
  );
}
