export default (score: number, average: number, type: "adult" | "resp") => {
  // Throw error if either number is not a number
  if (isNaN(score) || isNaN(average)) throw new Error("Both numbers must be numbers");

  const diff = (score - average) / score * 100;
  // Round to two decimals
  const roundedDiff = Math.round(diff * 100) / 100;
  const isAboveAverage = roundedDiff > 0;

  return `Vous êtes ${Math.abs(roundedDiff)}% ${isAboveAverage ? "plus" : "moins"} ${type === "adult" ? 'adulte' : 'responsable'} que votre tranche d'âge.`;
}