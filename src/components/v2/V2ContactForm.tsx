"use client";

import { ArrowRight, Confetti } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "h-13 w-full rounded-xl border-3 border-ink bg-paper px-4 text-[16px] text-ink placeholder:text-ink/40 transition focus:bg-lime/40 focus:outline-none";

export function V2ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="v2-sticker flex min-h-[460px] flex-col justify-center rounded-3xl bg-lime p-8 text-ink sm:p-12" role="status" aria-live="polite">
        <Confetti weight="fill" className="size-14 text-violet" aria-hidden />
        <h3 className="mt-6 font-v2-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">Am primit! Te sunăm, {form.firstName}.</h3>
        <p className="mt-4 max-w-md text-[17px] leading-relaxed">Un coleg din echipa de ofertare te contactează în aceeași zi lucrătoare. Între timp, scrolează liniștit.</p>
        <button type="button" onClick={form.reset} className="v2-sticker mt-10 inline-flex h-13 w-fit items-center gap-2 rounded-full bg-paper px-6 font-v2-display text-[14px] font-extrabold uppercase tracking-wider">
          Încă o cerere
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
        <label htmlFor={props.id} className="flex items-baseline justify-between font-v2-display text-[13px] font-extrabold uppercase tracking-wider text-ink">
          {label}
          {opts.optional && <span className="font-v2-body text-[12px] font-medium normal-case tracking-normal text-ink/60">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={5} placeholder={opts.placeholder} {...props} className={cn(input, "h-auto py-3", error && "border-coral bg-coral/10")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, error && "border-coral")}>
            <option value="">Ce te interesează?</option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        ) : (
          <input type={opts.type ?? "text"} autoComplete={opts.autoComplete} placeholder={opts.placeholder} {...props} className={cn(input, error && "border-coral bg-coral/10")} />
        )}
        {error && (
          <p id={errorId} className="text-[13px] font-bold text-coral">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate className="v2-sticker rounded-3xl bg-paper p-6 sm:p-10 [--sticker-rotate:0deg]">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Cum te cheamă", { autoComplete: "name", placeholder: "Nume și prenume" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Firmă / instituție", { optional: true, autoComplete: "organization", placeholder: "Denumirea" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@firma.ro" })}
        {field("subject", "Subiect", { select: true, optional: true, className: "sm:col-span-2" })}
        {field("message", "Spune-ne ce construiești", { textarea: true, placeholder: "Lucrarea, locația, cantitățile, termenul. Pe scurt e perfect.", className: "sm:col-span-2" })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-6 rounded-xl border-3 border-coral bg-coral/10 px-4 py-3 text-[14px] font-bold text-coral">
          Nu a mers. Mai încearcă o dată sau sună la {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="v2-sticker inline-flex h-14 items-center justify-center gap-2 rounded-full bg-coral px-8 font-v2-display text-[15px] font-extrabold uppercase tracking-wider text-paper disabled:opacity-60 [--sticker-rotate:-1deg]"
        >
          {form.status === "submitting" ? "Se trimite..." : "Trimite"}
          <ArrowRight weight="bold" className="size-5" aria-hidden />
        </button>
        <p className="text-[13px] leading-relaxed text-ink/60">Zero spam. Folosim datele doar ca să îți răspundem.</p>
      </div>
    </form>
  );
}
