
import fs from 'fs';
import { LEVELS_GRADE_3 } from './src/data/grade3';

const uniqueLevels = LEVELS_GRADE_3.map(level => {
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

  return { ...level, questions: uniqueQuestions };
});

let globalId = 1;
uniqueLevels.forEach(level => {
  level.questions.forEach(q => {
    q.id = globalId++;
  });
});

let newContent = `import { Level } from '../types';\n\nexport const LEVELS_GRADE_3: Level[] = ${JSON.stringify(uniqueLevels, null, 2)};\n`;

fs.writeFileSync('./src/data/grade3.ts', newContent);
console.log("Deduplicated and re-indexed grade3.ts successfully.");
