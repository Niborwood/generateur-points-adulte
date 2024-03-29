export default (
  score: number,
  average: number,
  type: "adult" | "resp",
  kindOfQuestions: 0 | 1
) => {
  // Throw error if either number is not a number
  if (isNaN(score) || isNaN(average))
    throw new Error("Both numbers must be numbers");

  const diff = ((score - average) / score) * 100;
  // Round to two decimals
  const roundedDiff = Math.round(diff * 100) / 100;
  const isAboveAverage = roundedDiff > 0;

  return `Ce résultat est ${Math.abs(roundedDiff)}% ${
    isAboveAverage ? "plus" : "moins"
  } ${type === "adult" ? "adulte" : "responsable"} que ${
    kindOfQuestions ? "ta" : "votre"
  } tranche d'âge.`;
};
