
import fs from 'fs';

// This is a bit hacky but safer for this specific file structure
let content = fs.readFileSync('./src/data/grade3.ts', 'utf8');

// We'll extract the individual topic blocks.
// They start with { id: ... and end with ] \n  },
// This is fragile but let's try to find the start and end of each.

const levelMarkers = [...content.matchAll(/  \{[\s\S]*?id: (\d+),[\s\S]*?title: "(.*?)"[\s\S]*?\],?\n  \}/g)];

const topics = levelMarkers.map(m => ({
  id: parseInt(m[1]),
  title: m[2],
  fullText: m[0],
  topicName: m[2].split(': ')[1] || m[2]
}));

// We need to re-sort them based on the desired order.
const desiredOrder = [
  "Máy tính và em",
  "Mạng và Internet",
  "Thông tin và tìm kiếm",
  "Virus máy tính",
  "Đạo đức số",
  "Ứng dụng tin học"
];

const sortedTopics = desiredOrder.map((name, index) => {
  const t = topics.find(topic => topic.title.includes(name));
  if (!t) throw new Error(`Could not find topic: ${name}`);
  
  // Update ID and Title numbering
  let text = t.fullText;
  text = text.replace(/id: \d+,/, `id: ${index + 1},`);
  text = text.replace(/title: "Chủ đề \d+: (.*?)"/, `title: "Chủ đề ${index + 1}: $1"`);
  
  return text;
});

const newContent = content.split('export const LEVELS_GRADE_3: Level[] = [')[0] + 
  'export const LEVELS_GRADE_3: Level[] = [\n' + 
  sortedTopics.join(',\n') + 
  '\n];';

fs.writeFileSync('./src/data/grade3.ts', newContent);
console.log("Rearranged topics successfully.");
