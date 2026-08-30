import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const sourceDir = resolve("docs", "assets", "favicon", "source");
const outputDir = resolve("docs", "assets", "favicon", "options");

async function readSvg(name) {
  const text = await readFile(resolve(sourceDir, name), "utf8");
  const viewBox = text.match(/viewBox="([^"]+)"/)?.[1];
  const inner = text.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>\s*$/)?.[1];
  if (!viewBox || !inner) {
    throw new Error(`Unable to parse SVG source: ${name}`);
  }
  return { viewBox, inner };
}

function documentSvg(title, description, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img">
  <title>${title}</title>
  <desc>${description}</desc>
  ${body}
</svg>
`;
}

function nestedSvg(asset, { x, y, width, height, fill, opacity = 1 }) {
  const inner = fill
    ? asset.inner.replaceAll('fill="currentColor"', `fill="${fill}"`)
    : asset.inner;
  return `<svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${asset.viewBox}" fill="${fill ?? "currentColor"}" opacity="${opacity}" overflow="visible">${inner}</svg>`;
}

function pluralityBackdrop(plurality, opacity = 0.84) {
  return `<rect width="64" height="64" rx="14" fill="#241c14"/>
  ${nestedSvg(plurality, { x: 2, y: 2, width: 60, height: 60, opacity })}`;
}

function visiblePluralityLattice() {
  const tiles = [
    [8, 8, "#d64933"], [19, 8, "#0eb1d2"], [29, 8, "#39b54a"], [40, 8, "#fbb03b"], [50, 8, "#d64933"],
    [8, 19, "#0eb1d2"], [50, 19, "#39b54a"],
    [8, 29, "#39b54a"], [50, 29, "#0eb1d2"],
    [8, 40, "#fbb03b"], [50, 40, "#d64933"],
    [8, 50, "#0eb1d2"], [19, 50, "#39b54a"], [29, 50, "#fbb03b"], [40, 50, "#d64933"], [50, 50, "#0eb1d2"],
  ];
  return tiles
    .map(([x, y, fill]) => `<rect x="${x}" y="${y}" width="6" height="6" rx="1.8" fill="${fill}"/>`)
    .join("\n  ");
}

const plurality = await readSvg("plurality-logo-dark-focus.svg");
const bootstrap = await readSvg("bootstrap-person-standing.svg");
const heroicons = await readSvg("heroicons-user-solid.svg");
const fontAwesome = await readSvg("fontawesome-person-solid.svg");
const material = await readSvg("material-accessibility-new.svg");
const noto = await readSvg("noto-person-standing.svg");

const options = [
  {
    file: "01-standing-in-plurality.svg",
    title: "Standing in Plurality",
    description: "The Plurality focus logo behind the Bootstrap standing-person icon.",
    body: `${pluralityBackdrop(plurality)}
  <circle cx="32" cy="32" r="17.5" fill="#fbf5e8" stroke="#241c14" stroke-width="2.5"/>
  ${nestedSvg(bootstrap, { x: 19, y: 18, width: 26, height: 28, fill: "#8a2e2e" })}`,
  },
  {
    file: "02-open-arms.svg",
    title: "Open Arms",
    description: "An inset, color-distributed Plurality lattice behind Google's Material accessibility symbol.",
    body: `<rect width="64" height="64" rx="14" fill="#241c14"/>
  ${visiblePluralityLattice()}
  ${nestedSvg(material, { x: 12.5, y: 12.5, width: 39, height: 39, fill: "#241c14" })}
  ${nestedSvg(material, { x: 14, y: 14, width: 36, height: 36, fill: "#fbf5e8" })}`,
  },
  {
    file: "03-human-portrait.svg",
    title: "Human Portrait",
    description: "The Plurality focus logo behind the Heroicons user portrait.",
    body: `${pluralityBackdrop(plurality, 0.78)}
  <circle cx="32" cy="32" r="18.5" fill="#fbf5e8" stroke="#241c14" stroke-width="2"/>
  ${nestedSvg(heroicons, { x: 16, y: 16, width: 32, height: 32, fill: "#1f3a5f" })}`,
  },
  {
    file: "04-full-human.svg",
    title: "Full Human",
    description: "The Plurality focus logo behind the Font Awesome person symbol.",
    body: `${pluralityBackdrop(plurality, 0.84)}
  <rect x="19" y="7" width="26" height="50" rx="13" fill="#8a2e2e" fill-opacity="0.94" stroke="#fbf5e8" stroke-width="1.5"/>
  ${nestedSvg(fontAwesome, { x: 23, y: 10, width: 18, height: 44, fill: "#fbf5e8" })}`,
  },
  {
    file: "05-human-color.svg",
    title: "Human in Color",
    description: "The Plurality focus logo behind Google's Noto standing-person emoji.",
    body: `${pluralityBackdrop(plurality, 0.76)}
  <circle cx="32" cy="32" r="20" fill="#fbf5e8" stroke="#241c14" stroke-width="2"/>
  ${nestedSvg(noto, { x: 13, y: 11, width: 38, height: 40 })}`,
  },
  {
    file: "06-human-at-center-original.svg",
    title: "Human at the Center",
    description: "Original art: a human figure centered inside a plural ring of colored nodes.",
    body: `<rect width="64" height="64" rx="14" fill="#241c14"/>
  <g>
    <rect x="10" y="8" width="7" height="7" rx="2" fill="#d64933"/>
    <rect x="22" y="8" width="7" height="7" rx="2" fill="#0eb1d2"/>
    <rect x="35" y="8" width="7" height="7" rx="2" fill="#39b54a"/>
    <rect x="47" y="8" width="7" height="7" rx="2" fill="#fbb03b"/>
    <rect x="8" y="21" width="7" height="7" rx="2" fill="#0eb1d2"/>
    <rect x="49" y="21" width="7" height="7" rx="2" fill="#39b54a"/>
    <rect x="8" y="36" width="7" height="7" rx="2" fill="#39b54a"/>
    <rect x="49" y="36" width="7" height="7" rx="2" fill="#0eb1d2"/>
    <rect x="10" y="49" width="7" height="7" rx="2" fill="#fbb03b"/>
    <rect x="22" y="49" width="7" height="7" rx="2" fill="#39b54a"/>
    <rect x="35" y="49" width="7" height="7" rx="2" fill="#0eb1d2"/>
    <rect x="47" y="49" width="7" height="7" rx="2" fill="#d64933"/>
  </g>
  <circle cx="32" cy="23" r="5" fill="#fbf5e8"/>
  <path d="M19 31c4 2.2 8.3 3.3 13 3.3S41 33.2 45 31M32 31v13M32 42l-7 9M32 42l7 9" fill="none" stroke="#fbf5e8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    file: "07-shared-humanity-original.svg",
    title: "Shared Humanity",
    description: "Original art: overlapping plural fields form a shared space behind a human portrait.",
    body: `<rect width="64" height="64" rx="14" fill="#fbf5e8"/>
  <rect x="7" y="7" width="31" height="31" rx="8" fill="#d64933" fill-opacity="0.78"/>
  <rect x="26" y="7" width="31" height="31" rx="8" fill="#0eb1d2" fill-opacity="0.78"/>
  <rect x="7" y="26" width="31" height="31" rx="8" fill="#39b54a" fill-opacity="0.78"/>
  <rect x="26" y="26" width="31" height="31" rx="8" fill="#fbb03b" fill-opacity="0.78"/>
  <circle cx="32" cy="25" r="7" fill="#241c14"/>
  <path d="M18 52c1.5-10 6.2-15 14-15s12.5 5 14 15c-4.2 2.7-8.9 4-14 4s-9.8-1.3-14-4Z" fill="#241c14"/>`,
  },
];

await mkdir(outputDir, { recursive: true });
for (const option of options) {
  await writeFile(
    resolve(outputDir, option.file),
    documentSvg(option.title, option.description, option.body),
    "utf8",
  );
}

await copyFile(
  resolve(outputDir, "02-open-arms.svg"),
  resolve("docs", "assets", "favicon", "favicon.svg"),
);

console.log(`Built ${options.length} favicon options; 02-open-arms.svg is the default.`);
