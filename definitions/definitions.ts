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
  category: string;
  answers: Answer[];
}

// PROPS DEFINITIONS
export interface CardProps {
  question: Question | undefined;
  goToNextQuestion: ({answer, reset}: goToNextQuestionProps) => void,
  score: Score
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
}

export interface CardAnswerProps {
  answer: string,
  checked: boolean,
}

export interface CardScoreProps {
  score: Score
}

export interface goToNextQuestionProps {
  answer: Answer | null,
  reset?: boolean;
}