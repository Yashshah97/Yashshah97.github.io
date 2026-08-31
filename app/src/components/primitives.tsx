import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import BrandMark, { brandColor } from "./BrandMark";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  // With reduced motion the content is placed, not revealed.
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  label,
  title,
  deck,
  children,
}: {
  id: string;
  label: string;
  title: string;
  deck?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 bg-signal" aria-hidden="true" />
              <span className="label text-signal">{label}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {deck && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">{deck}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/**
 * A technology tag. Where an official brand mark exists it sits inline and
 * takes the brand colour on hover; otherwise the label stands on its own.
 */
export function Chip({ name }: { name: string }) {
  const color = brandColor(name);
  return (
    <span
      className="label group/chip inline-flex items-center gap-1.5 border border-line bg-raise/60 px-2.5 py-1 text-dim transition-colors duration-200 hover:border-faint hover:text-ink"
      style={color ? ({ "--brand": color } as CSSProperties) : undefined}
    >
      <BrandMark
        name={name}
        className="text-faint transition-colors duration-200 group-hover/chip:text-(--brand)"
      />
      {name}
    </span>
  );
}
