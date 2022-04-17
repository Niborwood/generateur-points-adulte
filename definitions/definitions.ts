export interface Answer {
  _id: number,
  adultScore: number,
  respScore: number,
  answer: string,
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
  question: Question;
  goToNextQuestion: ({answer, reset}: goToNextQuestionProps) => void
}

export interface CardQuestionProps {
  _id: number,
  title: string,
  category: string,
}

export interface CardAnswersProps {
  answers: Answer[]
  selectedAnswer: Answer | null,
  setSelectedAnswer: (answer: Answer) => {}
}

export interface CardAnswerProps {
  answer: string,
  checked: boolean,
}

export interface goToNextQuestionProps {
  answer: Answer | null,
  reset?: boolean;
}