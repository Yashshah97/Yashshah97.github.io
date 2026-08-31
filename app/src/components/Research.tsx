import { publications } from "../data/content";
import type { PubStatus } from "../data/content";
import BrandMark from "./BrandMark";
import { Reveal, Section } from "./primitives";

const STATUS: Record<PubStatus, { text: string; className: string }> = {
  published: { text: "Published", className: "border-trace/50 text-trace" },
  accepted: { text: "Accepted", className: "border-signal/50 text-signal" },
  review: { text: "Under review", className: "border-line text-faint" },
};

export default function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title="Published work on making learned systems accountable"
      deck="Five IEEE papers: two published and indexed, one accepted for October, two under review. The common thread is exact attribution — decomposing a model’s decision into contributions you can compute in closed form, rather than approximating them after the fact."
    >
      <ol className="grid gap-px border border-line bg-line">
        {publications.map((paper, i) => {
          const status = STATUS[paper.status];
          return (
            <li key={paper.title} className="bg-void">
              <Reveal delay={Math.min(i, 3) * 0.05}>
                <article className="group p-6 transition-colors duration-300 hover:bg-panel sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`label border px-2.5 py-1 ${status.className}`}>
                      {status.text}
                    </span>
                    <span className="label flex items-center gap-2 text-faint">
                      <BrandMark
                        name="IEEE"
                        size={18}
                        className="transition-colors duration-300 group-hover:text-[#4A9FD4]"
                      />
                      {paper.venue}
                    </span>
                  </div>

                  <h3 className="mt-4 max-w-3xl font-display text-lg font-medium leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-signal sm:text-xl">
                    {paper.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-dim">{paper.detail}</p>

                  {paper.findings && (
                    <ul className="mt-4 space-y-2">
                      {paper.findings.map((finding) => (
                        <li
                          key={finding}
                          className="flex gap-3 text-[15px] leading-relaxed text-dim"
                        >
                          <span className="mt-2 h-px w-4 shrink-0 bg-trace" aria-hidden="true" />
                          {finding}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
