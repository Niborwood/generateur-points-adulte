import { AnswerGiven, Question } from "../../definitions/definitions";

export default ({ questions, answers }: ExtractSubjectsProps) => {
  const answersGiven = answers.map((answer) => answer.answer);

  const findSubject = (
    type: "adultMax" | "respMax" | "adultMin" | "respMin"
  ) => {
    const { question_id: questionId } = answersGiven.sort((a, b) => {
      if (type === "adultMax" || type === "respMax")
        return (
          (b[type === "adultMax" ? "adultScore" : "respScore"] ?? 5) -
          (a[type === "adultMax" ? "adultScore" : "respScore"] ?? 5)
        );
      else
        return (
          (a[type === "adultMin" ? "adultScore" : "respScore"] ?? 5) -
          (b[type === "adultMin" ? "adultScore" : "respScore"] ?? 5)
        );
    })[0];

    return (
      questions.find((question) => question._id === questionId)?.subject ||
      "Raté"
    );
  };

  return {
    adultMax: findSubject("adultMax"),
    respMax: findSubject("respMax"),
    adultMin: findSubject("adultMin"),
    respMin: findSubject("respMin"),
  };
};

interface ExtractSubjectsProps {
  questions: Question[];
  answers: AnswerGiven[];
}
