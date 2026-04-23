import { cp, rm, access, mkdir } from 'fs/promises';
import { join } from 'path';

const SRC_DIR = 'pages';
const DEST_DIR = join('dist', 'pages');

async function copyPages() {
  try {
    console.log('📁 Copying pages directory...');

    // Check source exists
    await access(SRC_DIR);

    // Ensure dist exists
    await mkdir('dist', { recursive: true });

    // Remove existing destination to avoid conflicts
    await rm(DEST_DIR, { recursive: true, force: true });

    // Copy recursively
    await cp(SRC_DIR, DEST_DIR, { recursive: true });

    console.log(`✅ Copied ${SRC_DIR}/ → ${DEST_DIR}/`);
  } catch (error) {
    console.error(`❌ Failed to copy pages: ${error.message}`);
    process.exit(1);
  }
}

copyPages();
