import { spawn } from "node:child_process";
import { mkdir, writeFile, cp } from "node:fs/promises";
import { dirname, join } from "node:path";

const routes = ["/", "/za-nas", "/galerija", "/cenovnik", "/kontakt"];
const siteDir = process.env.SITE_DIR ?? "site-dist";
const port = "3000";

const server = spawn(process.execPath, [".output/server/index.mjs"], {
  stdio: "inherit",
  env: {
    ...process.env,
    HOST: "127.0.0.1",
    NITRO_HOST: "127.0.0.1",
    PORT: port,
    NITRO_PORT: port,
    NODE_ENV: "production",
  },
});

try {
  await waitForServer();
  for (const route of routes) {
    const response = await fetch(`http://127.0.0.1:${port}${route}`);
    if (!response.ok) {
      throw new Error(`${route} returned ${response.status}`);
    }
    const html = await response.text();
    if (!html.includes("<html")) {
      throw new Error(`${route} did not return HTML`);
    }
    const file = route === "/" ? join(siteDir, "index.html") : join(siteDir, route.slice(1), "index.html");
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  await cp(".output/public", siteDir, { recursive: true, force: true });
} finally {
  server.kill();
}

async function waitForServer() {
  for (let attempt = 0; attempt < 40; attempt++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/health`);
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("The production server did not start");
}
