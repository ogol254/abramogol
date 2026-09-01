import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
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
      // Root Pages deployment: preserve root-relative asset and route URLs.
      // Protocol-relative and absolute URLs remain untouched.
      if (source.includes('/abramogol/')) {
        const updated = source.replaceAll('/abramogol/', '/');
        if (updated !== source) await writeFile(path, updated);
      }
    }
  }
}

await walk(root);
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html') {
    const route = entry.name.slice(0, -'.html'.length);
    await mkdir(join(root, route), { recursive: true });
    await cp(join(root, entry.name), join(root, route, 'index.html'));
  }
}
for (const entry of await readdir(join(root, 'projects'), { withFileTypes: true })) {
  if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html') {
    const route = entry.name.slice(0, -'.html'.length);
    await mkdir(join(root, 'projects', route), { recursive: true });
    await cp(join(root, 'projects', entry.name), join(root, 'projects', route, 'index.html'));
  }
}
await writeFile(join(root, '.nojekyll'), '');
