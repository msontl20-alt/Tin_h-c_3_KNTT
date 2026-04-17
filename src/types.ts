export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Mixed';

export type QuestionType = 'MCQ' | 'ORDERING' | 'MATCHING' | 'FIND_ERROR' | 'DRAG_DROP' | 'MULTIPLE_CHOICE' | 'MATCHING_PAIRS' | 'TRUE_FALSE' | 'SCRATCH';

export interface Question {
  id: number;
  text: string;
  options?: string[];
  correctAnswer?: any;
  explanation: string;
  difficulty: Difficulty;
  topic?: string;
  type?: QuestionType;
  items?: string[];
  targets?: string[];
  pairs?: { left: string; right: string }[];
  errorPart?: string;
  correction?: string;
  image?: string;
  video?: string;
  shuffledRightItems?: string[];
}

export interface Level {
  id: number;
  title: string;
  topic: string;
  description: string;
  longDescription?: string;
  keyConcepts?: string[];
  externalLinks?: { title: string; url: string }[];
  icon: string;
  questions: Question[];
}

export interface Grade {
  id: number;
  title: string;
  description: string;
  levels: Level[];
}
