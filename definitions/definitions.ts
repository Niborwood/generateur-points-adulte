export interface Answer {
  score: number,
  answer: string,
}

export interface Question {
  _id: number;
  title: string;
  helper?: string;
  category: string;
  answers: [Answer];
}

// PROPS DEFINITIONS
export interface CardProps {
  question: Question;
  goToNextQuestion: ({reset}: {reset:boolean}) => void
}

export interface CardQuestionProps {
  _id: number,
  title: string,
  category: string,
}

export interface CardAnswersProps {
  answers: [Answer]
}

export interface CardAnswerProps {
  answer: string,
  checked: boolean,
}