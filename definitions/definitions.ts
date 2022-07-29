type NotEmptyArray<T> = [T, ...T[]];
export interface Answer {
  _id?: number,
  adultScore: number | null,
  respScore: number | null,
  answer: string,
}

export interface Question {
  _id: number;
  title: string;
  title_0: string;
  title_1: string;
  helper?: string;
  condition?: [number, number]
  category: string;
  answers: NotEmptyArray<Answer>;
  color?: string;
}

export interface AnswerGiven {
  questionId: number;
  answerId: number;
}

export type AnswersGiven = AnswerGiven[]

export interface QuizState {
  questions: Question[];
  answers: AnswersGiven;
  currentQuestionIndex: number;
  name: string;
  hasSetName: boolean;
  createdAt: Date | null;
  hasEndedQuiz: boolean;
  kindOfQuestions: 0 | 1;
  isLoading: boolean;
}

export interface Stats {
  _id?: number;
  createdAt: Date;
  completedAt: Date;
  name: string;
  answers: AnswersGiven;
}