export const EdiDecimal = (precision = 2): (v: string) => number => {
  return (v: string): number => Number(v) / 10 ** precision;
};
