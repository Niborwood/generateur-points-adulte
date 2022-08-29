type NotEmptyArray<T> = [T, ...T[]];
export interface Answer {
  _id?: number;
  adultScore: number | null;
  respScore: number | null;
  answer: string;
}

export interface Question {
  _id: number;
  title_0: string;
  title_1: string;
  helper?: string;
  condition?: [number, number];
  answers: Answer[];
  conditions?: QuestionConditions;
  position: number;
}

export interface QuestionConditions {
  color?: string;
  bound?: {
    questionId: number;
    boundAnswerId: number;
  };
}

export interface AnswerGiven {
  questionId: number;
  answerId: number;
}

export type AnswersGiven = AnswerGiven[];

export type FetchedStats = {
  adult_score: number | null;
  resp_score: number | null;
}[];

export interface QuizState {
  questions: Question[];
  answers: AnswersGiven;
  currentQuestionIndex: number;
  name: string;
  age: number;
  hasSetName: boolean;
  createdAt: Date | null;
  hasEndedQuiz: boolean;
  kindOfQuestions: 0 | 1;
  isLoading: boolean;
  score: {
    adultScore: number | null;
    respScore: number | null;
  };
  stats?: FetchedStats;
  error: string;
}

export interface Stats {
  _id?: number;
  createdAt: Date;
  completedAt: Date;
  name: string;
  answers: AnswersGiven;
}

export interface QuestionToUpsert {
  _id?: number;
  title_0: string;
  title_1: string;
  created_at?: Date;
  updated_at: Date;
  position: number;
}

export interface AnswerToUpsert {
  _id?: string;
  question_id: string;
  adultScore: string | null;
  respScore: string | null;
}

export interface FormValues {
  [k: string]: FormDataEntryValue;
}
