
import fs from 'fs';
import { LEVELS_GRADE_4 } from './src/data/grade4';

const uniqueLevels = LEVELS_GRADE_4.map(level => {
  const uniqueQuestions = [];
  const levelSeen = new Set<string>();
  
  level.questions.forEach(q => {
    // Standardize topic name in question
    q.topic = q.topic.replace(/ & /g, " và ").replace(/&/g, " và ");
    
    const key = `${q.topic}|${q.text}`;
    if (!levelSeen.has(key)) {
      levelSeen.add(key);
      uniqueQuestions.push(q);
    }
  });

  return { ...level, topic: level.topic.replace(/ & /g, " và ").replace(/&/g, " và "), questions: uniqueQuestions };
});

let globalId = 2000; // Let's use 2000+ for Grade 4
uniqueLevels.forEach(level => {
  level.questions.forEach(q => {
    q.id = globalId++;
  });
});

let newContent = `import { Level } from '../types';\n\nexport const LEVELS_GRADE_4: Level[] = ${JSON.stringify(uniqueLevels, null, 2)};\n`;

fs.writeFileSync('./src/data/grade4.ts', newContent);
console.log("Deduplicated and re-indexed grade4.ts successfully.");
