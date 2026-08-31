import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile, stats } from "../data/content";

const HEADLINE = [
  { text: "I" },
  { text: "build" },
  { text: "the" },
  { text: "pipelines", accent: true },
  { text: "that" },
  { text: "ship" },
  { text: "other" },
  { text: "people’s" },
  { text: "work." },
];

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-0 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, rgba(255,176,32,0.07) 0%, transparent 55%), radial-gradient(90% 70% at 85% 20%, rgba(76,198,192,0.06) 0%, transparent 60%), linear-gradient(to bottom, transparent 55%, var(--color-void) 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8 sm:pb-20">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div {...rise(0)} className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-trace opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-trace" />
              </span>
              <span className="label text-trace">{profile.role}</span>
              <span className="label text-faint">/</span>
              <span className="label text-dim">{profile.company}</span>
              <span className="label hidden text-faint sm:inline">/</span>
              <span className="label hidden text-dim sm:inline">{profile.location}</span>
            </motion.div>

            <h1 className="font-display text-[2.5rem] font-bold leading-[1.0] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              <span className="sr-only">{HEADLINE.map((w) => w.text).join(" ")}</span>
              {/* Words rise in sequence, so the sentence assembles rather than fades. */}
              <span aria-hidden="true">
                {HEADLINE.map((word, i) => (
                  <span key={`${word.text}-${i}`} className="inline-block overflow-hidden pb-[0.06em]">
                    <motion.span
                      className={`inline-block ${word.accent ? "text-signal" : ""}`}
                      initial={reduced ? false : { y: "108%" }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.72,
                        delay: 0.1 + i * 0.055,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {word.text}
                    </motion.span>
                    {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
                  </span>
                ))}
              </span>
            </h1>

            <motion.p
              {...rise(0.16)}
              className="mt-7 max-w-xl text-base leading-relaxed text-dim sm:text-lg"
            >
              {profile.thesis}
            </motion.p>

            <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="label group flex items-center gap-2 bg-signal px-5 py-3.5 text-void transition-colors duration-200 hover:bg-ink"
              >
                See the work
                <ArrowDown size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="label group flex items-center gap-2 border border-line px-5 py-3.5 text-ink transition-colors duration-200 hover:border-ink"
              >
                Résumé
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="ml-1 flex items-center gap-1">
                {[
                  { href: profile.github, icon: GithubIcon, label: "GitHub" },
                  { href: profile.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center border border-line text-dim transition-colors duration-200 hover:border-trace hover:text-trace"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...rise(0.32)} className="lg:col-span-5">
            <figure className="relative mx-auto max-w-sm lg:ml-auto lg:mr-0">
              {/* Crop marks, borrowed from engineering drawings. */}
              {(
                [
                  "-top-px -left-px border-l border-t",
                  "-top-px -right-px border-r border-t",
                  "-bottom-px -left-px border-b border-l",
                  "-bottom-px -right-px border-b border-r",
                ] as const
              ).map((pos) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-10 h-5 w-5 border-signal ${pos}`}
                />
              ))}
              <div className="border border-line bg-panel p-2">
                <img
                  src={profile.photo}
                  alt={`${profile.name}, ${profile.role} at ${profile.company}`}
                  width={704}
                  height={880}
                  loading="eager"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="flex items-center justify-between gap-2 pt-2.5">
                  <span className="label text-faint">{profile.name}</span>
                  <span className="label text-faint">{profile.location}</span>
                </figcaption>
              </div>
            </figure>
          </motion.div>
        </div>

        <motion.dl
          {...rise(0.4)}
          className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group bg-void p-5 transition-colors duration-300 hover:bg-panel sm:p-6">
              <dt className="label mb-3 text-faint">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-signal sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-faint">{stat.note}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
