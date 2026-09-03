"use client";

import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { contact } from "@/data/company";

export type ContactValues = {
  name: string;
  phone: string;
  company: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactStatus = "idle" | "submitting" | "success" | "error";

const empty: ContactValues = { name: "", phone: "", company: "", email: "", subject: "", message: "" };

export const contactSubjects = [
  "Ofertă agregate",
  "Ofertă beton",
  "Ofertă prefabricate",
  "Lucrare de infrastructură",
  "Altă solicitare",
];

function validate(values: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Introduceți numele dumneavoastră.";
  const digits = values.phone.replace(/[^\d+]/g, "");
  if (digits.length < 9) errors.phone = "Introduceți un număr de telefon valid.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Adresa de e-mail nu este validă.";
  if (values.message.trim().length < 10) errors.message = "Descrieți pe scurt lucrarea sau materialele de care aveți nevoie.";
  return errors;
}

/**
 * Logica formularului de contact, independentă de aspect. Fiecare concept de
 * design își desenează propriul formular peste aceste stări.
 */
export function useContactForm() {
  const uid = useId();
  const [values, setValues] = useState<ContactValues>(empty);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactValues, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [status, setStatus] = useState<ContactStatus>("idle");

  const set = (key: keyof ContactValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [key]: e.target.value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof ContactValues) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, phone: true, company: true, email: true, subject: true, message: true });
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
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(empty);
    setTouched({});
    setErrors({});
    setStatus("idle");
  }

  const fieldProps = (key: keyof ContactValues) => {
    const id = `${uid}-${key}`;
    const error = touched[key] ? errors[key] : undefined;
    return {
      id,
      name: key,
      value: values[key],
      onChange: set(key),
      onBlur: blur(key),
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${id}-error` : undefined,
      error,
      errorId: `${id}-error`,
    };
  };

  return { values, errors, touched, status, onSubmit, reset, fieldProps, firstName: values.name.trim().split(" ")[0] };
}
