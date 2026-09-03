"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { DesignId } from "@/data/designs";

export type DesignChoice = {
  design: DesignId;
  chosenAt: string;
  name?: string;
  note?: string;
};

const KEY = "tomialex-portal:choice";
const EVENT = "tomialex-portal:choice-change";

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): DesignChoice | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as DesignChoice;
    if (!parsed || !["v1", "v2", "v3"].includes(parsed.design)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function write(choice: DesignChoice | null) {
  try {
    if (choice) window.localStorage.setItem(KEY, JSON.stringify(choice));
    else window.localStorage.removeItem(KEY);
  } catch {
    // Stocarea poate fi indisponibilă (mod privat); evenimentul tot se emite.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

const noopSubscribe = () => () => {};

/**
 * Alegerea clientului, păstrată în browser și sincronizată între componente
 * și între file. `ready` este false la randarea pe server și la hidratare,
 * ca să nu afișăm o stare greșită înainte de prima citire.
 */
export function useDesignChoice() {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const choice = useMemo(() => parse(raw), [raw]);

  const choose = useCallback((design: DesignId, extra: { name?: string; note?: string } = {}) => {
    const next: DesignChoice = { design, chosenAt: new Date().toISOString(), ...extra };
    write(next);
    return next;
  }, []);

  const clear = useCallback(() => write(null), []);

  return { choice, ready, choose, clear };
}

export function formatChoiceDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("ro-RO", { dateStyle: "long", timeStyle: "short" }).format(new Date(iso));
  } catch {
    return iso;
  }
}
