import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".json": "application/json",
};

/**
 * assets/ lives at the repo root, next to the build output, so the dev server
 * has to reach outside its own root to serve it.
 */
function rootAssets(): Plugin {
  const dir = path.resolve(import.meta.dirname, "assets");
  return {
    name: "serve-root-assets",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/assets", (req, res, next) => {
        const rel = decodeURIComponent((req.url ?? "/").split("?")[0]);
        const file = path.join(dir, rel);
        if (!file.startsWith(dir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
          return next();
        }
        res.setHeader("Content-Type", MIME[path.extname(file).toLowerCase()] ?? "application/octet-stream");
        fs.createReadStream(file).pipe(res);
      });
    },
  };
}

// The site is a GitHub Pages *user* site, so it is served from the root of the
// default branch. Source lives in app/ and the build writes index.html plus a
// static/ bundle directory next to the pre-existing assets/ folder.
export default defineConfig({
  root: "app",
  publicDir: false,
  plugins: [react(), tailwindcss(), rootAssets()],
  build: {
    outDir: "..",
    emptyOutDir: false,
    assetsDir: "static",
    target: "es2020",
  },
});
