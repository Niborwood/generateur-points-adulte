import { SetStateAction, Dispatch } from "react";

export interface Answer {
  _id: number,
  adultScore: number | null,
  respScore: number | null,
  answer: string,
}

export interface Score {
  adultScore: number,
  respScore: number,
  adultQuote: number,
  respQuote: number,
}

export interface Question {
  _id: number;
  title: string;
  helper?: string;
  condition?: [number, number]
  category: string;
  answers: Answer[];
  color?: string;
}

export type AnswersGiven = {
  questionId: number,
  answerId: number
}[]

// PROPS DEFINITIONS
export interface CardProps {
  question: Question | undefined;
  goToNextQuestion: ({answer, reset}: goToNextQuestionProps) => void,
  answers: AnswersGiven
}

export interface CardQuestionProps {
  _id: number,
  title: string,
  category: string,
  helper?: string
}

export interface CardAnswersProps {
  answers: Answer[]
  selectedAnswer: Answer | null,
  setSelectedAnswer: Dispatch<SetStateAction<Answer | null>>
  color: string | undefined
}

export interface CardAnswerProps {
  answer: string,
  checked: boolean,
}

export interface CardScoreProps {
  answers: AnswersGiven
}

export interface goToNextQuestionProps {
  questionId: number,
  answerId: number
}