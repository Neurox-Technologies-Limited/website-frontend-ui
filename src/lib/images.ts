// Curated IT-related imagery (Unsplash CDN hotlinks).
// Usage: <img src={IMAGES.datacenter} onError={onImgError} loading="lazy" alt="..." />
import type { SyntheticEvent } from "react";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  // Network operations / data center
  datacenter: u("1558494949-ef010cbdcc31"),
  serverRoom: u("1591405351990-4726e331f141"),
  network: u("1451187580459-43490279c0fa"),
  // Cloud & infrastructure
  cloud: u("1544197150-b99a580bb7a8"),
  // Software engineering / code
  code: u("1461749280684-dccba630e2f6"),
  developer: u("1542831371-29b0f74f9713"),
  // Cybersecurity
  security: u("1550751827-4bd374c3f58b"),
  // AI / circuitry
  ai: u("1620712943543-bcc4688e7485"),
  circuit: u("1518770660439-4636190af475"),
  // People / enterprise
  team: u("1522071820081-009f0129c71c"),
  office: u("1600880292203-757bb62b4baf"),
  meeting: u("1497366216548-37526070297c"),
  // Product-oriented
  mobileApps: u("1512941937669-90a1b58e7e9c"),
  analytics: u("1551288049-bebda4e38f71"),
} as const;

export type ImageKey = keyof typeof IMAGES;

export const IMAGE_FALLBACK = "/placeholder.svg";

export const onImgError = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (img.src.endsWith(IMAGE_FALLBACK)) return;
  img.src = IMAGE_FALLBACK;
};
