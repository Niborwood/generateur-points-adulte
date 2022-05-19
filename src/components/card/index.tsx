import { useState } from "react";

// DEFINITIONS
import { CardProps, Answer } from "../../../definitions/definitions";

// IMPORTS
import CardQuestion from "./card-question";
import CardAnswers from "./card-answers";
import CardScore from "./card-score";

export default function Card({
  question,
  goToNextQuestion,
  score,
  scoreAlt,
}: CardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  return (
    <div className="relative max-w-lg px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-x-1">
      {!question ? (
        <CardScore score={score} scoreAlt={scoreAlt} />
      ) : (
        <>
          {/* Card Question */}
          <CardQuestion
            _id={question._id}
            title={question.title}
            category={question.category}
            helper={question.helper}
          />

          {/* Card Answers */}
          <CardAnswers
            answers={question.answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            color={question.color}
          />

          {/* Next Question Button */}
          <button
            className="flex justify-center w-full p-4 mt-16 mb-2 font-bold text-white transition-all ease-in-out rounded-xl drop-shadow-lg hover:drop-shadow-sm bg-fuchsia-600 hover:bg-emerald-700"
            onClick={() =>
              goToNextQuestion({
                answer: selectedAnswer,
                answersRange: {
                  adultMax: question
                    ? Math.max(
                        ...question.answers.map((answer) => answer.adultScore)
                      ) ?? null
                    : 0,
                  adultMin: question
                    ? Math.min(
                        ...question.answers.map((answer) => answer.adultScore)
                      ) ?? null
                    : 0,
                  respMax: question
                    ? Math.max(
                        ...question.answers.map((answer) => answer.respScore)
                      ) ?? null
                    : 0,
                  respMin: question
                    ? Math.min(
                        ...question.answers.map((answer) => answer.respScore)
                      ) ?? null
                    : null,
                },
              })
            }
          >
            Question suivante
          </button>
        </>
      )}
    </div>
  );
}
