import { useEffect, useRef } from "react";

/**
 * The signature element: a directed build pipeline, animated.
 *
 * Yash's whole career is stages that data and builds move through, so the page
 * opens on one. Nodes sit in five columns matching the stage labels below the
 * canvas; packets travel the edges and light up whatever they arrive at.
 */

const STAGES = ["source", "ingest", "transform", "validate", "release"] as const;

type Node = { col: number; x: number; y: number; lit: number };
type Edge = { from: number; to: number; heat: number };
type Packet = { edge: number; t: number; speed: number };

const COLUMN_ROWS = [3, 5, 5, 4, 2];

/** Keep the graph aligned with the page's content column on wide screens. */
const MAX_GRAPH_WIDTH = 1152;

function buildGraph() {
  const nodes: Node[] = [];
  COLUMN_ROWS.forEach((rows, col) => {
    for (let r = 0; r < rows; r++) {
      nodes.push({
        col,
        x: (col + 0.5) / COLUMN_ROWS.length,
        // Spread rows across the band, insetting so nothing touches the edges.
        y: 0.16 + ((r + 0.5) / rows) * 0.68,
        lit: 0,
      });
    }
  });

  const edges: Edge[] = [];
  for (let col = 0; col < COLUMN_ROWS.length - 1; col++) {
    const from = nodes.map((n, i) => ({ n, i })).filter((e) => e.n.col === col);
    const to = nodes.map((n, i) => ({ n, i })).filter((e) => e.n.col === col + 1);
    from.forEach((f, fi) => {
      // Each node fans out to two downstream nodes, offset so the graph reads
      // as a braid rather than a grid.
      for (const step of [0, 1]) {
        const target = to[(fi + step) % to.length];
        edges.push({ from: f.i, to: target.i, heat: 0 });
      }
    });
  }
  return { nodes, edges };
}

export default function PipelineBand() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { nodes, edges } = buildGraph();
    const packets: Packet[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let last = performance.now();
    let spawnTimer = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const px = (n: Node) => {
      const usable = Math.min(width - 48, MAX_GRAPH_WIDTH);
      const left = (width - usable) / 2;
      return { x: left + n.x * usable, y: n.y * height };
    };

    /** Edges bow outward slightly so parallel paths stay distinguishable. */
    const controlPoints = (a: Node, b: Node) => {
      const p1 = px(a);
      const p2 = px(b);
      const mx = (p1.x + p2.x) / 2;
      return { p1, p2, c1x: mx, c1y: p1.y, c2x: mx, c2y: p2.y };
    };

    const pointOnEdge = (edge: Edge, t: number) => {
      const { p1, p2, c1x, c1y, c2x, c2y } = controlPoints(nodes[edge.from], nodes[edge.to]);
      const u = 1 - t;
      return {
        x: u * u * u * p1.x + 3 * u * u * t * c1x + 3 * u * t * t * c2x + t * t * t * p2.x,
        y: u * u * u * p1.y + 3 * u * u * t * c1y + 3 * u * t * t * c2y + t * t * t * p2.y,
      };
    };

    const spawn = () => {
      const sources = edges.map((e, i) => ({ e, i })).filter(({ e }) => nodes[e.from].col === 0);
      const pick = sources[Math.floor(Math.random() * sources.length)];
      packets.push({ edge: pick.i, t: 0, speed: 0.22 + Math.random() * 0.3 });
    };

    const draw = (dt: number) => {
      ctx.clearRect(0, 0, width, height);

      // Idle edges first, then heat on top, so active paths read clearly.
      for (const edge of edges) {
        const { p1, p2, c1x, c1y, c2x, c2y } = controlPoints(nodes[edge.from], nodes[edge.to]);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.bezierCurveTo(c1x, c1y, c2x, c2y, p2.x, p2.y);
        ctx.strokeStyle = "#242b3e";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (edge.heat > 0.01) {
          ctx.strokeStyle = `rgba(76, 198, 192, ${edge.heat * 0.6})`;
          ctx.lineWidth = 1.25;
          ctx.stroke();
          edge.heat = Math.max(0, edge.heat - dt * 0.9);
        }
      }

      for (const node of nodes) {
        const { x, y } = px(node);
        const lit = node.lit;
        const size = 3.5;

        if (lit > 0.02) {
          ctx.beginPath();
          ctx.arc(x, y, 3.5 + lit * 9, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 176, 32, ${lit * 0.13})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "#08090d";
        ctx.fill();
        ctx.strokeStyle = lit > 0.02 ? `rgba(255, 176, 32, ${0.35 + lit * 0.65})` : "#39415a";
        ctx.lineWidth = 1.25;
        ctx.stroke();

        node.lit = Math.max(0, node.lit - dt * 1.1);
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const packet = packets[i];
        const edge = edges[packet.edge];
        const head = pointOnEdge(edge, packet.t);
        const tail = pointOnEdge(edge, Math.max(0, packet.t - 0.16));

        const gradient = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
        gradient.addColorStop(0, "rgba(255, 176, 32, 0)");
        gradient.addColorStop(1, "rgba(255, 176, 32, 0.85)");
        ctx.beginPath();
        ctx.moveTo(tail.x, tail.y);
        ctx.lineTo(head.x, head.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.75;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffb020";
        ctx.fill();

        edge.heat = Math.min(1, edge.heat + dt * 1.6);
        packet.t += packet.speed * dt;

        if (packet.t >= 1) {
          nodes[edge.to].lit = 1;
          packets.splice(i, 1);
          // Forward the packet onto a downstream edge until it reaches release.
          const onward = edges.map((e, idx) => ({ e, idx })).filter(({ e }) => e.from === edge.to);
          if (onward.length) {
            const next = onward[Math.floor(Math.random() * onward.length)];
            packets.push({ edge: next.idx, t: 0, speed: packet.speed });
          }
        }
      }
    };

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      spawnTimer -= dt;
      if (spawnTimer <= 0 && packets.length < 22) {
        spawn();
        spawnTimer = 0.28 + Math.random() * 0.45;
      }
      draw(dt);
      raf = requestAnimationFrame(frame);
    };

    resize();

    if (reduced) {
      // Static graph with a few nodes lit, so the diagram still reads.
      nodes.forEach((n, i) => {
        if (i % 4 === 0) n.lit = 0.6;
      });
      edges.forEach((e, i) => {
        if (i % 5 === 0) e.heat = 0.7;
      });
      draw(0);
    } else {
      raf = requestAnimationFrame(frame);
    }

    const observer = new ResizeObserver(() => {
      resize();
      if (reduced) draw(0);
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative border-y border-line bg-panel/40">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block h-[170px] w-full sm:h-[240px]"
      />
      <p className="sr-only">
        A diagram of a build pipeline: work moves from source through ingest, transform and validate
        stages before release.
      </p>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 bottom-12"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, var(--color-void) 0%, transparent 10%, transparent 90%, var(--color-void) 100%)",
        }}
      />
      <ul className="grid grid-cols-5 border-t border-line" aria-hidden="true">
        {STAGES.map((stage, i) => (
          <li
            key={stage}
            className={`label px-1 py-3.5 text-center text-[0.5rem] text-faint sm:px-4 sm:text-[0.6875rem] ${
              i === 0 ? "" : "border-l border-line"
            }`}
          >
            {stage}
          </li>
        ))}
      </ul>
    </div>
  );
}
