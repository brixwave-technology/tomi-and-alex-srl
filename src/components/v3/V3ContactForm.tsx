"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "w-full border-0 border-b border-hair bg-transparent px-0 py-4 text-[17px] text-inkk placeholder:text-stone/50 transition-colors duration-500 focus:border-inkk focus:outline-none";

export function V3ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="flex min-h-[460px] flex-col justify-center" role="status" aria-live="polite">
        <span className="h-px w-16 bg-bronze" aria-hidden />
        <h3 className="v3-display mt-8 font-v3-display text-5xl text-inkk sm:text-6xl">
          Mulțumim, <em className="v3-italic">{form.firstName}</em>.
        </h3>
        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-stone">Am primit solicitarea. Un responsabil de ofertare vă contactează în aceeași zi lucrătoare.</p>
        <button type="button" onClick={form.reset} className="v3-link mt-10 w-fit text-[12px] font-medium uppercase tracking-[0.22em] text-inkk">
          Trimite altă solicitare
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
        <label htmlFor={props.id} className="flex items-baseline justify-between text-[11px] font-medium uppercase tracking-[0.22em] text-stone">
          {label}
          {opts.optional && <span className="text-[10px] normal-case tracking-normal text-stone/70">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={4} placeholder={opts.placeholder} {...props} className={cn(input, "resize-none", error && "border-bronze")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, "appearance-none", error && "border-bronze")}>
            <option value="">Alegeți</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input type={opts.type ?? "text"} autoComplete={opts.autoComplete} placeholder={opts.placeholder} {...props} className={cn(input, error && "border-bronze")} />
        )}
        {error && (
          <p id={errorId} className="mt-2 text-[13px] text-bronze">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate>
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {field("name", "Nume", { autoComplete: "name", placeholder: "Numele și prenumele" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie", { optional: true, autoComplete: "organization", placeholder: "Denumirea" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("subject", "Subiect", { select: true, optional: true, className: "sm:col-span-2" })}
        {field("message", "Mesaj", { textarea: true, placeholder: "Lucrarea, amplasamentul, cantitățile, termenul.", className: "sm:col-span-2" })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-8 border-l border-bronze pl-4 text-[14px] text-bronze">
          Solicitarea nu a putut fi trimisă. Încercați din nou sau sunați la {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="group inline-flex h-14 items-center justify-center gap-4 rounded-full bg-inkk px-8 text-[12px] font-medium uppercase tracking-[0.22em] text-ivory transition-all duration-500 hover:bg-bronze disabled:opacity-60"
        >
          {form.status === "submitting" ? "Se trimite" : "Trimite solicitarea"}
          <ArrowRight weight="regular" className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
        </button>
        <p className="text-[12.5px] leading-relaxed text-stone">Datele sunt folosite exclusiv pentru a vă răspunde.</p>
      </div>
    </form>
  );
}
