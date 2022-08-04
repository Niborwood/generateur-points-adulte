export default (num: number | null) => {
  if (!num) return num;

  // If num has less than 3 decimals, return num + trailing 0s.
  if (num % 1 < 0.001) {
    return num.toString().padEnd(0);
  }
  return num;
};
