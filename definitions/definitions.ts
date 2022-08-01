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
  age: number;
  hasSetName: boolean;
  createdAt: Date | null;
  hasEndedQuiz: boolean;
  kindOfQuestions: 0 | 1;
  isLoading: boolean;
  score: {
    adultScore: number | null,
    respScore: number | null,
  };
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
    _id?: number,
    title_0: string,
    title_1: string,
    created_at?: Date,
    updated_at: Date,
}

export interface AnswerToUpsert {
    _id?: string,
    question_id: string,
    adultScore: string | null,
    respScore: string | null,
}

export interface FormValues {
  [k:string]: FormDataEntryValue
}