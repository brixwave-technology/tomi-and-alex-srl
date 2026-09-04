"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Truck } from "@phosphor-icons/react/dist/ssr";
import { contact } from "@/data/company";
import { cn } from "@/lib/cn";

const materials = [
  "Nisip 0–4",
  "Balast 0–63",
  "Sort 4–8",
  "Sort 8–16",
  "Sort 16–31,5",
  "Beton C16/20",
  "Beton C20/25",
  "Beton C25/30",
  "Beton C30/37",
  "Tuburi de canalizare",
  "Cămine de vizitare",
  "Borduri și rigole",
  "Dale și pavele",
];

const input =
  "h-12 w-full border-2 border-concrete-700 bg-asphalt-950 px-3 text-[15px] text-white placeholder:text-concrete-500 transition focus:border-brand focus:outline-none";

/** Comandă rapidă de materiale: material, cantitate, localitate, telefon. */
export function V2QuickOrder({ className }: { className?: string }) {
  const uid = useId();
  const [values, setValues] = useState({ material: "", quantity: "", locality: "", phone: "" });
  const [errors, setErrors] = useState<Partial<typeof values>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<typeof values> = {};
    if (!values.material) next.material = "Selectați materialul.";
    if (!values.quantity.trim()) next.quantity = "Indicați cantitatea.";
    if (values.locality.trim().length < 2) next.locality = "Indicați localitatea livrării.";
    if (values.phone.replace(/[^\d+]/g, "").length < 9) next.phone = "Număr de telefon invalid.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className={cn("v2-plate border-t-8 border-brand bg-asphalt-900 p-6 text-white", className)} role="status" aria-live="polite">
        <CheckCircle weight="fill" className="size-10 text-brand" aria-hidden />
        <h3 className="v2-display mt-4 font-v2-display text-3xl">Comanda a fost înregistrată</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-concrete-300">
          {values.material}, {values.quantity}, livrare în {values.locality}. Dispeceratul vă confirmă telefonic prețul și intervalul de livrare în cel mult o oră lucrătoare.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ material: "", quantity: "", locality: "", phone: "" });
            setStatus("idle");
          }}
          className="mt-6 inline-flex h-12 items-center border-2 border-concrete-500 px-5 font-v2-display text-[16px] font-bold uppercase tracking-wide text-white hover:border-white"
        >
          Altă comandă
        </button>
      </div>
    );
  }

  const err = (key: keyof typeof values) =>
    errors[key] ? (
      <p id={`${uid}-${key}-err`} className="mt-1 text-[12.5px] font-semibold text-brand-soft">
        {errors[key]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className={cn("v2-plate border-t-8 border-brand bg-asphalt-900 p-6 text-white", className)} aria-labelledby={`${uid}-title`}>
      <div className="flex items-center gap-3">
        <Truck weight="fill" className="size-6 text-brand" aria-hidden />
        <h3 id={`${uid}-title`} className="v2-display font-v2-display text-2xl">
          Comandă rapidă de materiale
        </h3>
      </div>
      <p className="mt-2 text-[13.5px] text-concrete-300">Confirmare telefonică în cel mult o oră lucrătoare. Livrare de luni până sâmbătă, de la 06:30.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-material`} className="font-v2-display text-[13px] font-semibold uppercase tracking-wider text-concrete-300">
            Material
          </label>
          <select id={`${uid}-material`} value={values.material} onChange={set("material")} className={cn(input, "mt-1", errors.material && "border-brand")} aria-invalid={!!errors.material} aria-describedby={errors.material ? `${uid}-material-err` : undefined}>
            <option value="">Selectați materialul</option>
            {materials.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {err("material")}
        </div>
        <div>
          <label htmlFor={`${uid}-quantity`} className="font-v2-display text-[13px] font-semibold uppercase tracking-wider text-concrete-300">
            Cantitate
          </label>
          <input id={`${uid}-quantity`} value={values.quantity} onChange={set("quantity")} placeholder="ex. 24 t sau 8 mc" className={cn(input, "mt-1", errors.quantity && "border-brand")} aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? `${uid}-quantity-err` : undefined} />
          {err("quantity")}
        </div>
        <div>
          <label htmlFor={`${uid}-locality`} className="font-v2-display text-[13px] font-semibold uppercase tracking-wider text-concrete-300">
            Localitatea livrării
          </label>
          <input id={`${uid}-locality`} value={values.locality} onChange={set("locality")} placeholder="ex. Livada" autoComplete="address-level2" className={cn(input, "mt-1", errors.locality && "border-brand")} aria-invalid={!!errors.locality} aria-describedby={errors.locality ? `${uid}-locality-err` : undefined} />
          {err("locality")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-phone`} className="font-v2-display text-[13px] font-semibold uppercase tracking-wider text-concrete-300">
            Telefon pentru confirmare
          </label>
          <input id={`${uid}-phone`} type="tel" value={values.phone} onChange={set("phone")} placeholder="07xx xxx xxx" autoComplete="tel" className={cn(input, "mt-1", errors.phone && "border-brand")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-phone-err` : undefined} />
          {err("phone")}
        </div>
      </div>
      <button type="submit" disabled={status === "submitting"} className="mt-5 inline-flex h-14 w-full items-center justify-center gap-2 bg-brand font-v2-display text-xl font-bold uppercase tracking-wide text-white transition hover:bg-brand-soft disabled:opacity-60">
        {status === "submitting" ? "Se transmite..." : "Trimiteți comanda"}
        <ArrowRight weight="bold" className="size-5" aria-hidden />
      </button>
      <p className="mt-3 text-center text-[12.5px] text-concrete-500">
        Sau sunați direct:{" "}
        <a href={`tel:${contact.phone}`} className="font-semibold text-white">
          {contact.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
