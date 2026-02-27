/**
 * Post-build obfuscation script
 * Applies javascript-obfuscator to all JS chunks inside dist/ofb-dashboard/
 *
 * Usage: node scripts/obfuscate.js
 *   (automatically called by `npm run obfuscate` after the production build)
 */

const JavaScriptObfuscator = require('javascript-obfuscator');
const fs   = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist', 'ofb-dashboard');

/** Obfuscation options — balanced between protection and file size */
const OBFUSCATOR_OPTIONS = {
  compact:                          true,
  simplify:                         true,
  stringArray:                      true,
  stringArrayEncoding:              ['base64'],
  stringArrayRotate:                true,
  stringArrayShuffle:               true,
  stringArrayIndexShift:            true,
  stringArrayWrappersCount:         2,
  stringArrayWrappersType:          'function',
  stringArrayThreshold:             0.75,
  splitStrings:                     false,   // keeps file size manageable
  controlFlowFlattening:            false,   // very slow on large bundles
  deadCodeInjection:                false,   // very slow on large bundles
  selfDefending:                    false,   // incompatible with minified bundles
  disableConsoleOutput:             true,
  renameGlobals:                    false,   // would break Angular's bootstrapping
  identifierNamesGenerator:        'hexadecimal',
  numbersToExpressions:             false,
  transformObjectKeys:              false,
  unicodeEscapeSequence:            false,
};

function getAllJsFiles(dir) {
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.js'))
    .map(f => path.join(dir, f));
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + ' kB';
}

async function run() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`ERROR: dist directory not found at ${DIST_DIR}`);
    console.error('Run `npm run build` first.');
    process.exit(1);
  }

  const files = getAllJsFiles(DIST_DIR);
  if (!files.length) {
    console.error('No .js files found in dist/ofb-dashboard/');
    process.exit(1);
  }

  console.log(`\nObfuscating ${files.length} JS files in ${DIST_DIR} ...\n`);

  let totalOriginal = 0;
  let totalObfuscated = 0;

  for (const filePath of files) {
    const fileName   = path.basename(filePath);
    const original   = fs.readFileSync(filePath, 'utf8');
    const origSize   = Buffer.byteLength(original, 'utf8');
    totalOriginal   += origSize;

    process.stdout.write(`  ${fileName.padEnd(60)} ${formatBytes(origSize).padStart(10)}  →`);

    try {
      const result = JavaScriptObfuscator.obfuscate(original, OBFUSCATOR_OPTIONS);
      const obfuscated = result.getObfuscatedCode();
      const obfSize    = Buffer.byteLength(obfuscated, 'utf8');
      totalObfuscated += obfSize;

      fs.writeFileSync(filePath, obfuscated, 'utf8');
      process.stdout.write(`  ${formatBytes(obfSize).padStart(10)}\n`);
    } catch (err) {
      process.stdout.write('  SKIPPED (error)\n');
      console.error(`    ${err.message}`);
    }
  }

  console.log('\n' + '─'.repeat(80));
  console.log(
    `  Total: ${formatBytes(totalOriginal).padStart(10)} → ${formatBytes(totalObfuscated).padStart(10)}` +
    `  (${((totalObfuscated / totalOriginal - 1) * 100).toFixed(1)}% size change)`
  );
  console.log('\nObfuscation complete. Output: dist/ofb-dashboard/\n');
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
