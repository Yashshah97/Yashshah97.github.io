import { MapPin } from "lucide-react";
import { roles } from "../data/content";
import BrandMark from "./BrandMark";
import { Chip, Reveal, Section } from "./primitives";

export default function Experience() {
  return (
    <Section
      id="work"
      label="Experience"
      title="Seven years of production systems"
      deck="Release engineering at Apple today. Before it, performance telemetry at Microsoft, ingestion and identity at Claris, inventory services at Tesla, and invoice delivery at HSBC — consistently the layer other teams depend on."
    >
      <ol className="relative">
        {roles.map((role, i) => (
          <li key={role.id}>
            <Reveal delay={Math.min(i, 3) * 0.05}>
              <article className="group grid grid-cols-[auto_1fr] gap-x-5 sm:grid-cols-[4.5rem_auto_1fr] sm:gap-x-6">
                <div className="hidden pt-1 sm:block">
                  <span className="label text-faint transition-colors duration-300 group-hover:text-signal">
                    {role.start}
                  </span>
                </div>

                {/* The trace: one continuous line with a node per role. */}
                <div className="relative flex w-4 justify-center" aria-hidden="true">
                  <span
                    className={`absolute top-0 w-px bg-line ${
                      i === roles.length - 1 ? "h-8" : "h-full"
                    }`}
                  />
                  <span className="relative mt-1.5 flex h-3 w-3 items-center justify-center">
                    {role.current && (
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-signal opacity-60" />
                    )}
                    <span
                      className={`relative h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${
                        role.current
                          ? "border-signal bg-signal"
                          : "border-faint bg-void group-hover:border-signal group-hover:bg-signal"
                      }`}
                    />
                  </span>
                </div>

                <div className="pb-14">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="flex items-center gap-2.5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      <BrandMark
                        name={role.company}
                        size={22}
                        className="text-faint transition-colors duration-300 group-hover:text-ink"
                      />
                      {role.company}
                    </h3>
                    {role.org && <span className="label text-trace">{role.org}</span>}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                    <p className="text-base text-ink/90 sm:text-lg">{role.title}</p>
                    <span className="label text-faint">{role.period}</span>
                    <span className="label flex items-center gap-1.5 text-faint">
                      <MapPin size={11} aria-hidden="true" />
                      {role.location}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-dim">{role.summary}</p>

                  <ul className="mt-5 space-y-2.5 border-l border-line pl-5 transition-colors duration-300 group-hover:border-trace/40">
                    {role.points.map((point) => (
                      <li key={point} className="text-[15px] leading-relaxed text-dim">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {role.stack.map((tech) => (
                      <Chip key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
