import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "../data/content";
import { Reveal } from "./primitives";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/shahyash97", href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Yashshah97", href: profile.github, icon: GithubIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line">
      <div className="pointer-events-none absolute inset-0 grid-field opacity-[0.45]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(90% 100% at 50% 100%, rgba(255,176,32,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 bg-signal" aria-hidden="true" />
            <span className="label text-signal">Contact</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Got a system that has to stay up? Let&rsquo;s talk.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-dim sm:text-lg">
            I&rsquo;m most useful on distributed systems, release and developer infrastructure, and
            agent tooling &mdash; and open to research collaboration. Email reaches me fastest.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
            {CHANNELS.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="bg-void">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex h-full flex-col justify-between gap-8 p-6 transition-colors duration-300 hover:bg-panel sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      className="text-dim transition-colors duration-300 group-hover:text-signal"
                      aria-hidden="true"
                    />
                    <ArrowUpRight
                      size={16}
                      className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="label block text-faint">{label}</span>
                    <span className="mt-2 block break-words font-display text-base font-medium tracking-tight text-ink">
                      {value}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="relative border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="label text-faint">
            © {new Date().getFullYear()} {profile.name} — Built with React, Tailwind and Motion
          </p>
          <a href="#top" className="label text-faint transition-colors duration-200 hover:text-signal">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
