type NotEmptyArray<T> = [T, ...T[]];
export interface Answer {
  _id: number;
  adultScore: number | null;
  respScore: number | null;
  answer: string;
  question_id: number;
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
  subject: string;
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
  questionSubject: Question["subject"];
  answer: Answer;
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
  hasClickedLaunch: boolean;
  hasSetName: boolean;
  createdAt: string | null;
  hasEndedQuiz: boolean;
  kindOfQuestions: 0 | 1;
  isLoading: boolean;
  score: {
    adultScore: number | null;
    respScore: number | null;
  };
  stats?: FetchedStats;
  error: string;
  startCardTimer: number;
  ages: AgeRange[];
  answersSubjects: AnswerSubjects;
  adminStats?: AdminStats;
}

export interface Stats {
  _id?: number;
  createdAt: Date;
  completedAt: Date;
  name: string;
  answers: AnswersGiven;
}

export interface AdminStats {
  data: {
    id: number;
    name: string;
    age: number;
    completedAt: string;
    createdAt: string;
    score: {
      adultScore: number;
      respScore: number;
    };
  }[];
  totals: {
    adult_average: number;
    resp_average: number;
    age_average: number;
    total_answers: number;
  };
}

export interface QuestionToUpsert {
  _id?: number;
  title_0: string;
  title_1: string;
  created_at?: Date;
  updated_at: Date;
  position: number;
  subject?: string;
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

export interface AgeRange {
  label: string;
  min: number;
  max: number;
}

export interface AnswerSubjects {
  adultMax: Question["subject"];
  adultMin: Question["subject"];
  respMax: Question["subject"];
  respMin: Question["subject"];
}
