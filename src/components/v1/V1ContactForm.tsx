"use client";

import { Check, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "h-12 w-full rounded-[2px] border border-steel-400/35 bg-graphite-950 px-4 text-[15px] text-white placeholder:text-steel-400/70 transition focus:border-brand focus:outline-none";

export function V1ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="flex min-h-[460px] flex-col justify-center border border-steel-400/25 bg-graphite-900 p-8 sm:p-12" role="status" aria-live="polite">
        <span className="inline-flex size-12 items-center justify-center rounded-[2px] bg-brand text-white">
          <Check weight="bold" className="size-6" aria-hidden />
        </span>
        <h3 className="v1-display mt-8 text-3xl text-white sm:text-4xl">Cererea a fost înregistrată.</h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-steel-200">
          Mulțumim, {form.firstName}. Un responsabil de ofertare vă contactează în aceeași zi lucrătoare la numărul indicat.
        </p>
        <button type="button" onClick={form.reset} className="mt-10 inline-flex h-12 w-fit items-center rounded-[2px] border border-steel-400/40 px-6 text-[14px] font-bold text-white transition hover:bg-white/5">
          Trimite altă cerere
        </button>
      </div>
    );
  }

  const field = (
    key: keyof ContactValues,
    label: string,
    opts: { type?: string; optional?: boolean; autoComplete?: string; textarea?: boolean; placeholder?: string; select?: boolean } = {},
  ) => {
    const { error, errorId, ...props } = form.fieldProps(key);
    return (
      <div className={cn("flex flex-col gap-2", opts.textarea && "sm:col-span-2")}>
        <label htmlFor={props.id} className="flex items-baseline justify-between text-[13px] font-bold uppercase tracking-[0.12em] text-steel-200">
          {label}
          {opts.optional && <span className="text-[11px] font-medium normal-case tracking-normal text-steel-400">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={6} placeholder={opts.placeholder} {...props} className={cn(input, "h-auto py-3", error && "border-brand")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, error && "border-brand")}>
            <option value="">Alegeți tipul solicitării</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input type={opts.type ?? "text"} autoComplete={opts.autoComplete} placeholder={opts.placeholder} {...props} className={cn(input, error && "border-brand")} />
        )}
        {error && (
          <p id={errorId} className="text-[13px] text-brand-soft">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate className="border border-steel-400/25 bg-graphite-900 p-6 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Nume", { autoComplete: "name", placeholder: "Numele și prenumele" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie / instituție", { optional: true, autoComplete: "organization", placeholder: "Denumirea firmei sau a primăriei" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        <div className="sm:col-span-2">{field("subject", "Tipul solicitării", { select: true, optional: true })}</div>
        {field("message", "Descrierea lucrării sau a comenzii", {
          textarea: true,
          placeholder: "Tipul lucrării, locația, materialele și cantitățile estimate, termenul dorit.",
        })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-6 border border-brand/50 bg-brand/10 px-4 py-3 text-[14px] text-brand-soft">
          Cererea nu a putut fi trimisă. Încercați din nou sau sunați la {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="inline-flex h-13 items-center justify-center gap-2 rounded-[2px] bg-brand px-7 text-[15px] font-bold text-white transition hover:bg-brand-soft disabled:opacity-60"
        >
          {form.status === "submitting" ? "Se trimite..." : "Trimite cererea de ofertă"}
          <PaperPlaneTilt weight="bold" className="size-4" aria-hidden />
        </button>
        <p className="text-[12.5px] leading-relaxed text-steel-400">Datele sunt folosite exclusiv pentru a vă răspunde la solicitare.</p>
      </div>
    </form>
  );
}
