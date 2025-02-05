import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const sourceDir = "./img";
const outputDir = "./img/processed";
const maxWidth = 1690;
const maxHeight = 1269;

function formatBytes(bytes) {
  const sizes = ["Bytes", "KB", "MB"];
  if (bytes === 0) return "0 Byte";
  const i = Number.parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${Math.round((bytes / 1024 ** i) * 100) / 100} ${sizes[i]}`;
}

async function processImages() {
  try {
    await mkdir(outputDir, { recursive: true });
    const files = await readdir(sourceDir);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to process...`);

    for (const file of imageFiles) {
      const inputPath = join(sourceDir, file);
      const { name } = parse(file);
      const outputPath = join(outputDir, `${name}.webp`);

      try {
        // Get original file size
        const originalStats = await stat(inputPath);
        const originalSize = originalStats.size;

        const image = sharp(inputPath);
        const metadata = await image.metadata();

        const aspectRatio = metadata.width / metadata.height;
        let newWidth = metadata.width;
        let newHeight = metadata.height;

        if (newWidth > maxWidth) {
          newWidth = maxWidth;
          newHeight = Math.round(maxWidth / aspectRatio);
        }

        if (newHeight > maxHeight) {
          newHeight = maxHeight;
          newWidth = Math.round(maxHeight * aspectRatio);
        }

        await image
          .resize(newWidth, newHeight, {
            fit: "inside",
            withoutEnlargement: true,
          })
          .webp()
          .toFile(outputPath);

        // Get new file size
        const newStats = await stat(outputPath);
        const newSize = newStats.size;
        const savingsPercent = (
          ((originalSize - newSize) / originalSize) *
          100
        ).toFixed(2);

        console.log(`✅ Processed: ${file}`);
        console.log(
          `   Size: ${formatBytes(originalSize)} → ${formatBytes(
            newSize
          )} (${savingsPercent}% smaller)`
        );
        console.log(
          `   Dimensions: ${metadata.width}x${metadata.height} → ${newWidth}x${newHeight}`
        );
        console.log("----------------------------------------");
      } catch (err) {
        console.error(`❌ Error processing ${file}:`, err.message);
      }
    }

    console.log("\nImage processing complete! 🎉");
    console.log(`Processed images are in: ${outputDir}`);
  } catch (err) {
    console.error("Failed to process images:", err);
  }
}

processImages();
