export const EVENT_TYPES = [
  "Boda",
  "15 Años",
  "Cumpleaños Infantil",
  "Bautismo",
  "Comunión",
  "Otro"
] as const;

export type EventType = typeof EVENT_TYPES[number];
