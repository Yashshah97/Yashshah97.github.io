import { BRAND_ICONS } from "../data/brand-icons";

/** Perceived lightness, used to keep near-black brand colors legible on the dark canvas. */
function isTooDark(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.32;
}

export function brandColor(name: string): string | null {
  const icon = BRAND_ICONS[name];
  if (!icon) return null;
  return isTooDark(icon.hex) ? "#ECEEF3" : `#${icon.hex}`;
}

export function hasBrandMark(name: string) {
  return Boolean(BRAND_ICONS[name]);
}

/**
 * A brand mark in currentColor. Colour is applied by the parent on hover so a
 * row of logos reads as one quiet system until you interact with it.
 */
export default function BrandMark({
  name,
  size = 13,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const icon = BRAND_ICONS[name];
  if (!icon) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
