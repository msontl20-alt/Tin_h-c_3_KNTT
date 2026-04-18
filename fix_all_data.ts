
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

function fixFile(filePath, gradeOffset) {
  let content = readFileSync(filePath, 'utf-8');
  
  // Replace "&" with "và" in topic titles and topic names
  content = content.replace(/"topic":\s*"([^"]*)&([^"]*)"/g, (match, p1, p2) => {
    return `"topic": "${p1.trim()} và ${p2.trim()}"`;
  });
  content = content.replace(/"title":\s*"([^"]*)&([^"]*)"/g, (match, p1, p2) => {
    return `"title": "${p1.trim()} và ${p2.trim()}"`;
  });

  // Re-parse to manipulate questions
  // Since it's a TS file with an export, we can't easily eval it without risks.
  // But we can do regex for re-indexing if needed.
  // However, the user wants me to add questions too.
  
  return content;
}

// I'll use a more surgical approach for adding questions.
console.log("Analyzing and fixing data...");
