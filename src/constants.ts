import { Difficulty, QuestionType, Question, Level, Grade } from './types';
import { LEVELS_GRADE_3 } from './data/grade3';
import { LEVELS_GRADE_4 } from './data/grade4';
import { LEVELS_GRADE_5 } from './data/grade5';

export const GRADES: Grade[] = [
  {
    id: 3,
    title: "Tin học 3",
    description: "Nhà Thông Thái Nhỏ - Làm quen với máy tính và thông tin.",
    levels: LEVELS_GRADE_3
  },
  {
    id: 4,
    title: "Tin học 4",
    description: "Khám phá tri thức - Lập trình kéo thả và ứng dụng.",
    levels: LEVELS_GRADE_4
  },
  {
    id: 5,
    title: "Tin học 5",
    description: "Chinh phục công nghệ - Giải quyết vấn đề với máy tính.",
    levels: LEVELS_GRADE_5
  }
];
