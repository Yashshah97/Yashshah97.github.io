/**
 * Emits app/src/data/brand-icons.ts containing only the marks the site uses.
 *
 * simple-icons is a devDependency; bundling the whole set would add megabytes,
 * so the paths are extracted at author time and checked in. Re-run with
 * `node scripts/gen-icons.mjs` after adding a technology to content.ts.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const si = require("simple-icons");

/** Display name in content.ts -> simple-icons slug. */
const MAP = {
  Apple: "apple",
  Tesla: "tesla",
  HSBC: "hsbc",
  IEEE: "ieee",

  Go: "go",
  Python: "python",
  Java: "openjdk",
  "C++": "cplusplus",
  C: "c",
  "C#": "sharp",
  Scala: "scala",
  TypeScript: "typescript",
  JavaScript: "javascript",
  Bash: "gnubash",

  React: "react",
  Angular: "angular",
  Vue: "vuedotjs",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  HTML5: "html5",
  CSS3: "css",
  GraphQL: "graphql",

  Kubernetes: "kubernetes",
  Docker: "docker",
  Podman: "podman",
  Kafka: "apachekafka",
  RabbitMQ: "rabbitmq",
  "Spring Boot": "springboot",
  Terraform: "terraform",
  Jenkins: "jenkins",
  OpenTelemetry: "opentelemetry",
  OTLP: "opentelemetry",
  Grafana: "grafana",
  Splunk: "splunk",
  Kibana: "kibana",
  "Google Cloud": "googlecloud",
  GCP: "googlecloud",

  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Redis: "redis",
  ElasticSearch: "elasticsearch",
  Cassandra: "apachecassandra",
  Spark: "apachespark",
  Hadoop: "apachehadoop",

  PyTorch: "pytorch",
  TensorFlow: "tensorflow",
  Keras: "keras",
  "scikit-learn": "scikitlearn",
  OpenCV: "opencv",
  "Hugging Face": "huggingface",
  Pandas: "pandas",
  NumPy: "numpy",
  Flask: "flask",
  Django: "django",

  Git: "git",
  GitHub: "github",
  Okta: "okta",
};

/** Marks simple-icons no longer ships (trademark removals), drawn by hand. */
const EXTRA = {
  Microsoft: {
    hex: "7FBA00",
    path: "M0 0h11.377v11.372H0Zm12.623 0H24v11.372H12.623ZM0 12.623h11.377V24H0Zm12.623 0H24V24H12.623Z",
    multicolor: true,
  },
  AWS: {
    hex: "FF9900",
    path: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576a.35.35 0 0 1 .056.184c0 .08-.048.16-.152.24l-.503.336a.38.38 0 0 1-.208.072c-.08 0-.16-.04-.24-.112a2.5 2.5 0 0 1-.287-.375 6 6 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.671 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.4 6.4 0 0 0-.863.272 2 2 0 0 1-.28.104.5.5 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.6.6 0 0 1 .224-.167 4.6 4.6 0 0 1 1.005-.36 4.8 4.8 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.44.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.7 6.7 0 0 0-.735-.136 6 6 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.294.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.4 1.4 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.152-.312a.55.55 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.9.08-.17.128a1 1 0 0 1-.55.2l-1.925 6.17c-.48.16-.104.263-.168.311a.5.5 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.65.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.6.6 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.78.78 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.9 1.9 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.336-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.7.7 0 0 1 .24.2.43.43 0 0 1 .71.263v.375c0 .168-.63.256-.183.256a.83.83 0 0 1-.304-.096 3.65 3.65 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.71.655-.207.926a2.1 2.1 0 0 1-.583.703c-.25.2-.55.343-.894.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.152 11.877 3.152 2.914 0 6.114-.607 9.06-1.852.439-.2.813.287.385.608zm1.093-1.246c-.336-.43-2.22-.207-3.072-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.968-.75 4.254-.399.287.36-.08 2.833-1.485 4.015-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.694-3.002z",
  },
};

// Only ship marks the content actually references — every unused path is dead
// weight in the bundle.
const content = readFileSync(new URL("../app/src/data/content.ts", import.meta.url), "utf8");
const ALWAYS = new Set(["IEEE"]);
const isUsed = (name) => ALWAYS.has(name) || content.includes(`"${name}"`);

const out = {};
for (const [name, slug] of Object.entries(MAP)) {
  if (!isUsed(name)) continue;
  const key = "si" + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = si[key];
  if (!icon) {
    console.warn(`missing simple-icons slug: ${slug} (${name})`);
    continue;
  }
  out[name] = { hex: icon.hex, path: icon.path };
}
for (const [name, icon] of Object.entries(EXTRA)) {
  if (isUsed(name)) out[name] = icon;
}

/** Product names that should carry their parent brand's mark. */
const ALIASES = { "AWS S3": "AWS", CloudWatch: "AWS" };
for (const [name, parent] of Object.entries(ALIASES)) {
  if (isUsed(name) && EXTRA[parent]) out[name] = EXTRA[parent];
}

const body = `// Generated by scripts/gen-icons.mjs — do not edit by hand.
// Brand marks from simple-icons (CC0-1.0), plus hand-drawn marks the project no longer ships.

export type BrandIcon = { hex: string; path: string; multicolor?: boolean };

export const BRAND_ICONS: Record<string, BrandIcon> = ${JSON.stringify(out, null, 2)};
`;

writeFileSync(new URL("../app/src/data/brand-icons.ts", import.meta.url), body);
console.log(`wrote ${Object.keys(out).length} icons`);
