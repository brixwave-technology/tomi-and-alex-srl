"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, Check, CheckCircle, Copy, EnvelopeSimple, X } from "@phosphor-icons/react/dist/ssr";
import { BrixwaveLogo } from "./BrixwaveLogo";
import { designById, type DesignId } from "@/data/designs";
import { brixwave } from "@/data/brixwave";
import { formatChoiceDate, useDesignChoice } from "@/lib/selection";
import { cn } from "@/lib/cn";

type Ctx = {
  designId: DesignId;
  open: () => void;
  isChosen: boolean;
};

const DesignContext = createContext<Ctx | null>(null);

export function useDesign() {
  const ctx = useContext(DesignContext);
  if (!ctx) throw new Error("useDesign trebuie folosit în interiorul DesignShell.");
  return ctx;
}

/**
 * Învelișul comun al fiecărui concept: bara plutitoare „Înapoi la Index” /
 * „Aleg acest design” și dialogul de confirmare. Aspectul barei este al
 * portalului BRIXWAVE, ca să fie recognoscibil indiferent de concept.
 */
export function DesignShell({ designId, markSrc = null, children }: { designId: DesignId; markSrc?: string | null; children: ReactNode }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { choice, ready, choose, clear } = useDesignChoice();
  const design = designById[designId];
  const isChosen = ready && choice?.design === designId;

  const open = useCallback(() => setDialogOpen(true), []);
  const ctx = useMemo(() => ({ designId, open, isChosen }), [designId, open, isChosen]);

  return (
    <DesignContext.Provider value={ctx}>
      {children}
      <FloatingBar
        label={design.label}
        name={design.name}
        isChosen={isChosen}
        ready={ready}
        chosenOther={ready && !!choice && choice.design !== designId ? designById[choice.design].label : null}
        onChoose={open}
        markSrc={markSrc}
      />
      <ChooseDialog
        designId={designId}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        choice={choice}
        choose={choose}
        clear={clear}
      />
    </DesignContext.Provider>
  );
}

function FloatingBar({
  label,
  name,
  isChosen,
  ready,
  chosenOther,
  onChoose,
  markSrc,
}: {
  label: string;
  name: string;
  isChosen: boolean;
  ready: boolean;
  chosenOther: string | null;
  onChoose: () => void;
  markSrc: string | null;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-center px-3 pb-3 sm:pb-5 font-portal">
      <div className="pointer-events-auto flex w-full max-w-3xl items-center gap-2 rounded-2xl border border-white/10 bg-portal-900/90 p-2 text-portal-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:gap-3 sm:rounded-full sm:pl-4">
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          {markSrc ? <Image src={markSrc} alt="Brixwave" width={32} height={32} className="size-8 object-contain" /> : <BrixwaveLogo variant="mark" className="size-8" />}
          <div className="leading-tight">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-portal-300">{label}</p>
            <p className="text-[13px] font-semibold">{name}</p>
          </div>
        </div>
        <div className="ml-auto flex w-full items-center gap-2 sm:w-auto">
          <Link
            href="/"
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 text-[13px] font-semibold text-portal-100 transition hover:bg-white/10 sm:flex-none sm:rounded-full"
          >
            <ArrowLeft weight="bold" className="size-4" aria-hidden />
            Înapoi la Index
          </Link>
          <button
            type="button"
            onClick={onChoose}
            className={cn(
              "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl px-5 text-[13px] font-bold transition sm:flex-none sm:rounded-full",
              isChosen
                ? "bg-emerald-400 text-portal-950 hover:bg-emerald-300"
                : "bg-bw-blue text-white shadow-[0_10px_30px_-10px_rgba(59,91,219,0.9)] hover:bg-bw-blue-soft",
            )}
            aria-live="polite"
          >
            {isChosen ? (
              <>
                <Check weight="bold" className="size-4" aria-hidden />
                Design ales
              </>
            ) : (
              <>
                Aleg acest design
                {ready && chosenOther && <span className="sr-only">(în prezent ați ales {chosenOther})</span>}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function ChooseDialog({
  designId,
  open,
  onClose,
  choice,
  choose,
  clear,
}: {
  designId: DesignId;
  open: boolean;
  onClose: () => void;
  choice: ReturnType<typeof useDesignChoice>["choice"];
  choose: ReturnType<typeof useDesignChoice>["choose"];
  clear: ReturnType<typeof useDesignChoice>["clear"];
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const design = designById[designId];
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const confirmed = choice?.design === designId;
  const otherChoice = choice && choice.design !== designId ? designById[choice.design] : null;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // După confirmare, rezumatul folosește datele salvate, nu câmpurile formularului.
  const shownName = confirmed ? (choice?.name ?? "") : name;
  const shownNote = confirmed ? (choice?.note ?? "") : note;

  const summary = useMemo(() => {
    const lines = [
      `Alegere design website ${brixwave.client}`,
      ``,
      `Varianta aleasă: ${design.label} — ${design.name}`,
      choice?.chosenAt && confirmed ? `Confirmată la: ${formatChoiceDate(choice.chosenAt)}` : "",
      shownName ? `Persoana de contact: ${shownName}` : "",
      shownNote ? `Observații: ${shownNote}` : "",
      ``,
      `Concepte dezvoltate de ${brixwave.name}.`,
    ].filter((l, i, arr) => !(l === "" && arr[i - 1] === ""));
    return lines.join("\n");
  }, [design, choice, confirmed, shownName, shownNote]);

  const mailto = `mailto:${brixwave.email}?subject=${encodeURIComponent(`Alegere design: ${design.label} — ${brixwave.client}`)}&body=${encodeURIComponent(summary)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[calc(100%-1.5rem)] max-w-lg rounded-3xl border border-white/10 bg-portal-900 p-0 text-portal-100 shadow-2xl backdrop:bg-portal-950/80 backdrop:backdrop-blur-sm open:animate-[rise_0.4s_var(--ease-out-quint)_both] font-portal"
      aria-labelledby="choose-title"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-portal-300 transition hover:bg-white/10 hover:text-white"
          aria-label="Închide"
        >
          <X weight="bold" className="size-4" aria-hidden />
        </button>

        <div className="flex items-center gap-3">
          <BrixwaveLogo variant="mark" className="size-9" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-portal-300">Confirmarea alegerii</p>
        </div>

        {confirmed ? (
          <div className="mt-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-portal-950">
                <CheckCircle weight="fill" className="size-6" aria-hidden />
              </span>
              <div>
                <h2 id="choose-title" className="text-2xl font-extrabold tracking-tight">
                  Ați ales {design.label}
                </h2>
                <p className="mt-1 text-[15px] text-portal-300">
                  {design.name}. Confirmată la {choice?.chosenAt ? formatChoiceDate(choice.chosenAt) : "acum"}.
                </p>
              </div>
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-portal-300">
              Alegerea este salvată în acest browser. Trimiteți confirmarea echipei {brixwave.name} prin e-mail sau copiați
              rezumatul și trimiteți-l pe canalul preferat.
            </p>
            <pre className="mt-4 max-h-40 overflow-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-portal-950/70 p-4 text-[13px] leading-relaxed text-portal-100">
              {summary}
            </pre>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <a
                href={mailto}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bw-blue px-5 text-[14px] font-bold text-white transition hover:bg-bw-blue-soft"
              >
                <EnvelopeSimple weight="bold" className="size-4" aria-hidden />
                Trimite către {brixwave.name}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-[14px] font-semibold transition hover:bg-white/10"
              >
                {copied ? <Check weight="bold" className="size-4" aria-hidden /> : <Copy weight="bold" className="size-4" aria-hidden />}
                {copied ? "Copiat" : "Copiază rezumatul"}
              </button>
            </div>
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="inline-flex items-center gap-2 text-[14px] font-semibold text-portal-100 hover:underline">
                <ArrowLeft weight="bold" className="size-4" aria-hidden />
                Înapoi la Index
              </Link>
              <button
                type="button"
                onClick={() => {
                  clear();
                  onClose();
                }}
                className="text-[13px] font-medium text-portal-300 underline-offset-4 hover:text-white hover:underline"
              >
                Renunț la alegere și compar din nou
              </button>
            </div>
          </div>
        ) : (
          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              choose(designId, { name: name.trim() || undefined, note: note.trim() || undefined });
            }}
          >
            <h2 id="choose-title" className="text-2xl font-extrabold tracking-tight">
              Alegeți {design.label}?
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-portal-300">
              {design.name}. {design.concept}. Puteți reveni oricând și schimba alegerea din Index.
            </p>
            {otherChoice && (
              <p className="mt-4 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-[13px] text-amber-100">
                În prezent aveți ales {otherChoice.label}. Confirmarea de mai jos înlocuiește alegerea anterioară.
              </p>
            )}
            <div className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-[13px] font-semibold">
                Numele dumneavoastră <span className="font-normal text-portal-300">(opțional)</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Nume și prenume"
                  className="h-12 rounded-xl border border-white/15 bg-portal-950/60 px-4 text-[15px] font-normal text-white placeholder:text-portal-300/60 focus:border-bw-blue focus:outline-none"
                />
              </label>
              <label className="grid gap-1.5 text-[13px] font-semibold">
                Observații pentru echipa de design <span className="font-normal text-portal-300">(opțional)</span>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  placeholder="Ce v-a plăcut, ce ați ajusta, ce lipsește."
                  className="rounded-xl border border-white/15 bg-portal-950/60 px-4 py-3 text-[15px] font-normal text-white placeholder:text-portal-300/60 focus:border-bw-blue focus:outline-none"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-5 text-[14px] font-semibold transition hover:bg-white/10"
              >
                Mai compar
              </button>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-bw-blue px-6 text-[14px] font-bold text-white transition hover:bg-bw-blue-soft"
              >
                <Check weight="bold" className="size-4" aria-hidden />
                Confirm: aleg {design.label}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}

/** Buton „Aleg acest design” pentru interiorul conceptelor; aspectul vine din className. */
export function ChooseDesignButton({ className, children }: { className?: string; children?: ReactNode }) {
  const { open, isChosen } = useDesign();
  return (
    <button type="button" onClick={open} className={className} data-chosen={isChosen || undefined}>
      {children ?? (isChosen ? "Design ales ✓" : "Aleg acest design")}
    </button>
  );
}

/** Link „Înapoi la Index” pentru interiorul conceptelor. */
export function BackToIndexLink({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <Link href="/" className={className}>
      {children ?? "Înapoi la Index"}
    </Link>
  );
}
