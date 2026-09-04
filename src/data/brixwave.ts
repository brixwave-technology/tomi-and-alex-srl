import { withBase } from "./images";

/** Semnătura BRIXWAVE, agenția care a dezvoltat conceptele. */
export const brixwave = {
  name: "BRIXWAVE",
  fullName: "Brixwave Technology",
  claim: "Concepte de design dezvoltate exclusiv de BRIXWAVE",
  subclaim: "Trei direcții vizuale, același conținut, aceeași structură. Alegeți varianta care vă reprezintă.",
  /** Site-ul agenției; orice logo sau mențiune Brixwave duce aici. */
  url: "https://brixwave.com",
  urlLabel: "brixwave.com",
  /** Simbolul original (cubul cu undă), PNG cu fundal transparent derivat din fișierul încărcat de agenție. */
  mark: withBase("/images/brixwave-mark.png"),
  /** Adresa la care clientul trimite confirmarea alegerii (se poate schimba oricând). */
  email: "office@brixwave.ro",
  client: "Tomi Alex SRL",
} as const;
