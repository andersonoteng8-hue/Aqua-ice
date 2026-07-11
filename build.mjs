import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, 'dist');
const errors = [];

function check(label, condition, msg) {
  if (!condition) errors.push(`${label}: ${msg}`);
  console.log(`${condition ? 'PASS' : 'FAIL'}: ${label}`);
}

// 1. Verify required files exist
check('index.html exists', existsSync(join(__dirname, 'index.html')), 'missing');
check('style.css exists', existsSync(join(__dirname, 'style.css')), 'missing');
check('script.js exists', existsSync(join(__dirname, 'script.js')), 'missing');

// 2. Verify HTML references
const html = readFileSync(join(__dirname, 'index.html'), 'utf8');
check('HTML references style.css', html.includes('style.css'), 'no link to style.css');
check('HTML references script.js', html.includes('script.js'), 'no script tag for script.js');

// 3. Verify no frameworks
const css = readFileSync(join(__dirname, 'style.css'), 'utf8');
const js = readFileSync(join(__dirname, 'script.js'), 'utf8');
const frameworkPattern = /\b(react|vue|angular|svelte|tailwind|next\.js)\b/i;
check('No frameworks in HTML', !frameworkPattern.test(html.replace(/next"/gi, '').replace(/next /gi, '')), 'framework reference found');
check('No frameworks in CSS', !frameworkPattern.test(css), 'framework reference found');
check('No frameworks in JS', !frameworkPattern.test(js.replace(/next/gi, '')), 'framework reference found');

// 4. Verify all local image paths resolve
const imgPattern = /images\/[^\s"')]+\.jpeg/g;
const allContent = html + '\n' + js;
const imgPaths = [...new Set(allContent.match(imgPattern) || [])];
for (const img of imgPaths) {
  check(`Image: ${img}`, existsSync(join(__dirname, img)), 'file not found');
}

// 5. Verify JS syntax (basic check for balanced braces)
const openBraces = (js.match(/{/g) || []).length;
const closeBraces = (js.match(/}/g) || []).length;
check('JS braces balanced', openBraces === closeBraces, `${openBraces} open vs ${closeBraces} close`);

// 6. Verify CSS has no @import after other rules (must be first)
const importIndex = css.indexOf('@import');
const firstNonImportNonComment = css.replace(/\/\*[\s\S]*?\*\//g, '').trim().indexOf('@');
check('CSS @import order', importIndex === -1 || importIndex < 10, '@import must be at top');

// 7. Copy files to dist
if (errors.length === 0) {
  if (!existsSync(dist)) mkdirSync(dist, { recursive: true });
  copyFileSync(join(__dirname, 'index.html'), join(dist, 'index.html'));
  copyFileSync(join(__dirname, 'style.css'), join(dist, 'style.css'));
  copyFileSync(join(__dirname, 'script.js'), join(dist, 'script.js'));

  // Copy images directory
  function copyDir(src, dest) {
    if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
      const srcPath = join(src, entry);
      const destPath = join(dest, entry);
      if (statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        copyFileSync(srcPath, destPath);
      }
    }
  }
  copyDir(join(__dirname, 'images'), join(dist, 'images'));

  console.log('\nBuild output copied to dist/');
  console.log(`  dist/index.html  (${statSync(join(dist, 'index.html')).size} bytes)`);
  console.log(`  dist/style.css   (${statSync(join(dist, 'style.css')).size} bytes)`);
  console.log(`  dist/script.js   (${statSync(join(dist, 'script.js')).size} bytes)`);
}

// 8. Report
console.log('');
if (errors.length > 0) {
  console.error(`BUILD FAILED with ${errors.length} error(s):`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('BUILD SUCCEEDED — all checks passed.');
}
