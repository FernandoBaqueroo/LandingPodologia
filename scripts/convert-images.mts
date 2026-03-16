import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const EXTENSIONS = [".png", ".jpg", ".jpeg"];

const convertDir = async (dirPath: string): Promise<void> => {
  const entries = await readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dirPath, entry.name);

    if (entry.isDirectory()) {
      await convertDir(fullPath);
      continue;
    }

    const ext = extname(entry.name).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;

    const nameWithoutExt = basename(entry.name, ext);
    const outputPath = join(dirPath, `${nameWithoutExt}.webp`);

    try {
      await sharp(fullPath).webp({ quality: 80 }).toFile(outputPath);
      await unlink(fullPath);
      console.log(`✅ ${entry.name} → ${nameWithoutExt}.webp`);
    } catch (err) {
      console.error(`❌ Error con ${entry.name}:`, err);
    }
  }
};

const publicDir = join(process.cwd(), "public");
console.log(`\n🔄 Convirtiendo imágenes en: ${publicDir}\n`);
await convertDir(publicDir);
console.log("\n✅ Conversión completa.\n");
