import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { runInNewContext } from "node:vm";

const root = resolve("docs");
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory);
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry);
    if ((await stat(path)).isDirectory()) {
      files.push(...(await walk(path)));
    } else {
      files.push(path);
    }
  }
  return files;
}

function recordFailure(message) {
  failures.push(message);
  console.error(`FAIL ${message}`);
}

const files = await walk(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const jsFiles = files.filter((file) => extname(file) === ".js");
const markdownRoots = [
  "README.md",
  "EXECUTIVE-BRIEF.md",
  "PORTABILITY.md",
  "CONTRIBUTING.md",
  "books",
  "course",
  "events",
  "research",
];
const markdownFiles = [];

for (const entry of markdownRoots) {
  const path = resolve(entry);
  if ((await stat(path)).isDirectory()) {
    markdownFiles.push(...(await walk(path)));
  } else {
    markdownFiles.push(path);
  }
}

for (const file of jsFiles) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    recordFailure(`${file}: ${result.stderr.trim()}`);
  }
}

const contentPath = resolve("docs", "assets", "content.js");
const contentContext = { window: {} };
try {
  runInNewContext(await readFile(contentPath, "utf8"), contentContext, {
    filename: contentPath,
  });
  const guide = contentContext.window.FIELD_GUIDE;
  const allowedLabels = new Set([
    "observed-fact",
    "source-claim",
    "scenario",
    "recommendation",
    "synthesis",
    "question",
  ]);

  if (!guide) {
    recordFailure("docs/assets/content.js: FIELD_GUIDE was not initialized");
  } else {
    if (guide.sources.length !== 9) {
      recordFailure(`dashboard data: expected 9 primary sources, found ${guide.sources.length}`);
    }
    if (guide.courseWeeks.length !== 14) {
      recordFailure(`dashboard data: expected 14 course weeks, found ${guide.courseWeeks.length}`);
    }
    if (guide.colabLibrary.publications.length !== 21) {
      recordFailure(
        `dashboard data: expected 21 CoLab publications, found ${guide.colabLibrary.publications.length}`,
      );
    }
    if (guide.courseReadingShelf.length < 12) {
      recordFailure(
        `dashboard data: expected at least 12 course readings, found ${guide.courseReadingShelf.length}`,
      );
    }

    const sourceIds = new Set();
    for (const source of guide.sources) {
      if (sourceIds.has(source.id)) {
        recordFailure(`dashboard data: duplicate source id ${source.id}`);
      }
      sourceIds.add(source.id);
      if (!/^https:\/\//.test(source.url)) {
        recordFailure(`dashboard data: source ${source.id} lacks an HTTPS primary URL`);
      }
    }

    for (const item of [...guide.claims, ...guide.timeline]) {
      if (!allowedLabels.has(item.label)) {
        recordFailure(`dashboard data: ${item.id} has unsupported label ${item.label}`);
      }
      if (!Array.isArray(item.sourceIds) || item.sourceIds.length === 0) {
        recordFailure(`dashboard data: ${item.id} has no sourceIds`);
      } else {
        for (const sourceId of item.sourceIds) {
          if (!sourceIds.has(sourceId)) {
            recordFailure(`dashboard data: ${item.id} cites unknown source ${sourceId}`);
          }
        }
      }
    }
  }
} catch (error) {
  recordFailure(`docs/assets/content.js: data contract failed (${error.message})`);
}

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  if (!/<html[^>]*\blang=/i.test(html)) {
    recordFailure(`${file}: missing html lang attribute`);
  }

  const dashboardHtml = await readFile(resolve("docs", "index.html"), "utf8");
  for (const id of [
    "sourceGrid",
    "matrixTable",
    "timelineList",
    "weekGrid",
    "colabGrid",
    "courseShelfList",
    "audiencePanels",
    "promptDeck",
    "projectLibraryList",
    "methodologyBody",
  ]) {
    if (!dashboardHtml.includes(`id="${id}"`)) {
      recordFailure(`docs/index.html: missing dashboard mount #${id}`);
    }
  }

  const allDashboardText = (
    await Promise.all(files.map((file) => readFile(file, "utf8")))
  ).join("\n");
  for (const deprecated of [
    "https://ai-futures.org/ai-2040-plan-a/",
    "https://www.gatesnotes.com/home/home-page-topic/reader/",
    "https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2026/05/25/260525e.html",
  ]) {
    if (allDashboardText.includes(deprecated)) {
      recordFailure(`dashboard contains deprecated source URL ${deprecated}`);
    }
  }
  if (!/<title>[^<]+<\/title>/i.test(html)) {
    recordFailure(`${file}: missing document title`);
  }
  if (!/<main(?:\s|>)/i.test(html)) {
    recordFailure(`${file}: missing main landmark`);
  }

  const localReferences = [...html.matchAll(/\b(?:href|src)=["']([^"'#?]+)["']/gi)]
    .map((match) => match[1])
    .filter((reference) => !/^(?:[a-z]+:|\/\/|mailto:|tel:)/i.test(reference));

  for (const reference of localReferences) {
    const target = resolve(file, "..", reference);
    if (!target.startsWith(root)) {
      continue;
    }
    try {
      await stat(target);
    } catch {
      recordFailure(`${file}: missing local asset ${reference}`);
    }
  }
}

for (const file of markdownFiles.filter((path) => extname(path) === ".md")) {
  const markdown = await readFile(file, "utf8");
  const references = [...markdown.matchAll(/!?\[[^\]]*]\(([^)\s]+)(?:\s+["'][^)]*)?\)/g)]
    .map((match) => match[1])
    .filter((reference) => !/^(?:[a-z]+:|\/\/|#)/i.test(reference));

  for (const reference of references) {
    const pathOnly = decodeURIComponent(reference.split("#", 1)[0]);
    const target = resolve(dirname(file), pathOnly);
    try {
      await stat(target);
    } catch {
      recordFailure(`${file}: missing local reference ${reference}`);
    }
  }
}

for (const file of (await walk(resolve("data"))).filter((path) => extname(path) === ".json")) {
  try {
    JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    recordFailure(`${file}: invalid JSON (${error.message})`);
  }
}

if (failures.length > 0) {
  process.exitCode = 1;
} else {
  console.log(
    `PASS ${htmlFiles.length} HTML, ${jsFiles.length} JavaScript, ` +
      `${markdownFiles.length} Markdown, and source JSON checked`,
  );
}
