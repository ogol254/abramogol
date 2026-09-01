import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = 'dist/client';
const textExtensions = new Set(['.html', '.css', '.js', '.mjs', '.json', '.svg', '.xml', '.txt']);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (textExtensions.has(extname(entry.name))) {
      const source = await readFile(path, 'utf8');
      // Rewrite only root-relative URLs. Protocol-relative and absolute URLs stay intact.
      const updated = source.replace(/(["'=:(])\/(?!\/|abramogol\/)/g, '$1/abramogol/');
      if (updated !== source) await writeFile(path, updated);
    }
  }
}

await walk(root);
await writeFile(join(root, '.nojekyll'), '');
