import { mkdtemp, readdir, rename, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join } from "node:path";
import { spawnSync } from "node:child_process";
import sharp from "sharp";

const publicDirectory = new URL("../public/", import.meta.url).pathname;
const supportedExtensions = new Set([".webp", ".jpg", ".jpeg", ".png"]);
const heifFiles = new Set([
  "images/prosjekter/mur/mur11.webp",
  "images/prosjekter/teknisk/teknisk3.webp",
]);

async function listFiles(directory, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = join(prefix, entry.name);
    const absolutePath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(absolutePath, relativePath)));
    else if (supportedExtensions.has(extname(entry.name).toLowerCase())) files.push(relativePath);
  }

  return files;
}

async function optimize(relativePath) {
  const absolutePath = join(publicDirectory, relativePath);
  const temporaryOutput = `${absolutePath}.optimized`;
  const extension = extname(relativePath).toLowerCase();
  let inputPath = absolutePath;
  let heifDirectory;

  if (heifFiles.has(relativePath)) {
    heifDirectory = await mkdtemp(join(tmpdir(), "serviceleverandoren-heif-"));
    inputPath = join(heifDirectory, "source.jpg");
    const conversion = spawnSync("heif-convert", [absolutePath, inputPath], { encoding: "utf8" });
    if (conversion.status !== 0) throw new Error(conversion.stderr || `Kunne ikke konvertere ${relativePath}`);
  }

  let pipeline = sharp(inputPath)
    .rotate()
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true });

  if (extension === ".webp") pipeline = pipeline.webp({ quality: 80, effort: 5, smartSubsample: true });
  else if (extension === ".png") pipeline = pipeline.png({ compressionLevel: 9 });
  else pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });

  await pipeline.toFile(temporaryOutput);
  await rename(temporaryOutput, absolutePath);
  if (heifDirectory) await rm(heifDirectory, { recursive: true, force: true });
}

const files = await listFiles(publicDirectory);
for (const file of files) {
  await optimize(file);
  process.stdout.write(`Optimalisert: ${file}\n`);
}
