import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile, projects } from "../data/content";
import { Chip, Reveal, Section } from "./primitives";

export default function Projects() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const project = projects[selected];

  return (
    <Section
      id="projects"
      label="Projects"
      title="Still building after hours"
      deck="A current series of single-purpose systems written against the standard library alone — no dependencies, no network, so the durability and integrity guarantees are the code's own rather than something inherited. Earlier academic and industry work follows."
    >
      <Reveal>
        <div className="grid gap-px border border-line bg-line md:grid-cols-[minmax(0,18rem)_1fr]">
          <ul className="bg-void">
            {projects.map((item, i) => {
              const active = i === selected;
              return (
                <li key={item.name}>
                  <button
                    type="button"
                    onClick={() => setSelected(i)}
                    aria-current={active}
                    className={`flex w-full items-baseline justify-between gap-4 border-l-2 px-5 py-4 text-left transition-colors duration-200 sm:px-6 ${
                      active
                        ? "border-signal bg-panel text-ink"
                        : "border-transparent text-dim hover:border-line hover:bg-panel/50 hover:text-ink"
                    }`}
                  >
                    <span className="flex items-center gap-2 font-display text-base font-medium tracking-tight">
                      {item.active && (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-trace"
                          aria-label="Actively maintained"
                        />
                      )}
                      {item.name}
                    </span>
                    <span className={`label shrink-0 ${active ? "text-signal" : "text-faint"}`}>
                      {item.year}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="bg-void p-6 sm:p-8">
            {/* Keyed remount rather than AnimatePresence: an exit animation that
                stalls would leave the panel showing the previous project. */}
            <motion.div
              key={project.name}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                {project.context && (
                  <span className="label mb-4 block text-trace">{project.context}</span>
                )}
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-dim">{project.blurb}</p>

                <ul className="mt-6 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-dim">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-signal/70" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Chip key={tech} name={tech} />
                  ))}
                </div>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="label group/repo mt-7 inline-flex items-center gap-2 border border-line px-4 py-2.5 text-ink transition-colors duration-200 hover:border-signal hover:text-signal"
                  >
                    <GithubIcon size={14} />
                    View source
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover/repo:-translate-y-0.5 group-hover/repo:translate-x-0.5"
                    />
                  </a>
                )}
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href={`${profile.github}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="label group mt-6 inline-flex items-center gap-2 text-dim transition-colors duration-200 hover:text-signal"
        >
          Everything else lives on GitHub
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
