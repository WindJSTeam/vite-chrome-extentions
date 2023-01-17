// @ts-ignore
import * as fs from 'fs';
// @ts-ignore
import * as path from 'path';

const { resolve } = path;

// @ts-ignore
const outDir = resolve(__dirname, '..', 'dist');

export default function makeManifest() {
  return {
    name: 'make-manifest',
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }

      const manifestPath = resolve(outDir, 'manifest.json');

      // @ts-ignore
      fs.copyFileSync(path.join(__dirname, "..", "manifest.json"), manifestPath);

      console.log(`\nManifest file copy complete: ${manifestPath}`, 'success');
    },
  };
}
