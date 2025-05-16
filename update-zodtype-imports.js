#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemasDir = path.join(__dirname, 'src', 'schemas');

async function updateFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    if (file.endsWith('.ts')) {
      const filePath = path.join(dirPath, file);
      await updateFile(filePath);
    }
  }
}

async function updateFile(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    
    // Handle separate ZodType import
    let updatedContent = content.replace(
      /import\s*{\s*ZodType\s*}\s*from\s*['"]zod['"];?/g,
      'import type { ZodType } from \'zod\';'
    );
    
    // Handle combined imports with z and ZodType
    updatedContent = updatedContent.replace(
      /import\s*{\s*z,\s*ZodType\s*}\s*from\s*['"]zod['"];?/g,
      'import { z, type ZodType } from \'zod\';'
    );
    
    if (content !== updatedContent) {
      console.log(`Updating ${filePath}`);
      await fs.promises.writeFile(filePath, updatedContent);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

updateFilesInDirectory(schemasDir).then(() => {
  console.log('Finished updating files');
}).catch(error => {
  console.error('Error:', error);
});