
import { LEVELS_GRADE_3 } from './src/data/grade3';

const errors: string[] = [];
const ids = new Set<number>();

LEVELS_GRADE_3.forEach((level) => {
  level.questions.forEach((q) => {
    // Check for duplicate IDs
    if (ids.has(q.id)) {
      errors.push(`Duplicate ID found: ${q.id} in topic ${q.topic}`);
    }
    ids.add(q.id);

    // Check MCQ/TRUE_FALSE correctAnswer range
    if (q.type === 'MCQ' || q.type === 'TRUE_FALSE') {
      if (typeof q.correctAnswer !== 'number') {
         errors.push(`Invalid correctAnswer type for ID ${q.id}: expected number, got ${typeof q.correctAnswer}`);
      } else if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
         errors.push(`correctAnswer out of range for ID ${q.id}: index ${q.correctAnswer} but options count is ${q.options.length}`);
      }
    }

    // Check MATCHING
    if (q.type === 'MATCHING') {
      if (!Array.isArray(q.pairs)) {
        errors.push(`Missing pairs for MATCHING question ID ${q.id}`);
      }
    }

    // Check ORDERING
    if (q.type === 'ORDERING') {
      if (!Array.isArray(q.correctAnswer)) {
        errors.push(`Invalid correctAnswer for ORDERING ID ${q.id}: expected array`);
      }
    }

    // Check DRAG_DROP
    if (q.type === 'DRAG_DROP') {
      if (!q.items || !q.targets || typeof q.correctAnswer !== 'object') {
        errors.push(`Invalid structure for DRAG_DROP ID ${q.id}`);
      }
    }
  });
});

if (errors.length > 0) {
  console.log("Errors found:");
  errors.forEach(e => console.log("- " + e));
} else {
  console.log("No structural errors found in grade3.ts");
}
