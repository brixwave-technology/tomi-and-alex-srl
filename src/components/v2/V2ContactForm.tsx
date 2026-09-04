"use client";

import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { contactSubjects, useContactForm, type ContactValues } from "@/lib/useContactForm";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const input =
  "h-13 w-full border-2 border-concrete-200 bg-white px-4 text-[15.5px] text-asphalt-950 placeholder:text-concrete-500 transition focus:border-brand focus:outline-none";

export function V2ContactForm() {
  const form = useContactForm();

  if (form.status === "success") {
    return (
      <div className="flex min-h-[460px] flex-col justify-center border-t-8 border-brand bg-white p-8 sm:p-12" role="status" aria-live="polite">
        <CheckCircle weight="fill" className="size-12 text-brand" aria-hidden />
        <h3 className="v2-display mt-6 font-v2-display text-4xl text-asphalt-950 sm:text-5xl">Cererea a fost înregistrată</h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-concrete-500">
          Vă mulțumim, {form.firstName}. Un responsabil de ofertare vă contactează în aceeași zi lucrătoare la numărul indicat.
        </p>
        <button type="button" onClick={form.reset} className="mt-10 inline-flex h-13 w-fit items-center border-2 border-asphalt-950 px-6 font-v2-display text-[17px] font-bold uppercase tracking-wide text-asphalt-950 transition hover:bg-asphalt-950 hover:text-white">
          Trimiteți altă cerere
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
      <div className={cn("flex flex-col gap-1.5", opts.className)}>
        <label htmlFor={props.id} className="flex items-baseline justify-between font-v2-display text-[14px] font-semibold uppercase tracking-wider text-asphalt-950">
          {label}
          {opts.optional && <span className="font-v2 text-[12px] font-medium normal-case tracking-normal text-concrete-500">opțional</span>}
        </label>
        {opts.textarea ? (
          <textarea rows={6} placeholder={opts.placeholder} {...props} className={cn(input, "h-auto py-3", error && "border-brand")} />
        ) : opts.select ? (
          <select {...props} className={cn(input, error && "border-brand")}>
            <option value="">Selectați tipul solicitării</option>
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
          <p id={errorId} className="text-[13px] font-semibold text-brand">
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={form.onSubmit} noValidate className="border-t-8 border-brand bg-white p-6 sm:p-10">
      <div className="mb-8 border-b-2 border-concrete-100 pb-5">
        <h3 className="v2-display font-v2-display text-3xl text-asphalt-950">Cerere de ofertă pentru lucrări</h3>
        <p className="mt-2 text-[14.5px] text-concrete-500">Pentru materiale folosiți comanda rapidă de mai sus. Pentru lucrări de execuție, completați formularul; oferta este gata în maximum 5 zile lucrătoare de la vizita în teren.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Nume și prenume", { autoComplete: "name", placeholder: "Persoana de contact" })}
        {field("phone", "Telefon", { type: "tel", autoComplete: "tel", placeholder: "07xx xxx xxx" })}
        {field("company", "Companie / instituție", { optional: true, autoComplete: "organization", placeholder: "Denumirea beneficiarului" })}
        {field("email", "E-mail", { type: "email", optional: true, autoComplete: "email", placeholder: "nume@companie.ro" })}
        {field("subject", "Tipul solicitării", { select: true, optional: true, className: "sm:col-span-2" })}
        {field("message", "Descrierea lucrării", { textarea: true, placeholder: "Obiectivul, amplasamentul, cantitățile estimate, termenul de execuție.", className: "sm:col-span-2" })}
      </div>
      {form.status === "error" && (
        <p role="alert" className="mt-6 border-2 border-brand bg-brand/10 px-4 py-3 text-[14px] font-semibold text-brand-dark">
          Cererea nu a putut fi transmisă. Reîncercați sau sunați la {contact.phoneDisplay}.
        </p>
      )}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={form.status === "submitting"}
          aria-busy={form.status === "submitting"}
          className="inline-flex h-14 items-center justify-center gap-2 bg-brand px-8 font-v2-display text-xl font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft disabled:opacity-60"
        >
          {form.status === "submitting" ? "Se transmite..." : "Trimiteți cererea"}
          <ArrowRight weight="bold" className="size-5" aria-hidden />
        </button>
        <p className="text-[12.5px] leading-relaxed text-concrete-500">Datele sunt folosite exclusiv pentru formularea ofertei.</p>
      </div>
    </form>
  );
}
