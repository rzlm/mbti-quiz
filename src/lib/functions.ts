
export const calculateMBTI = (answers: string[]) => {
  type MBTIKey = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  const scores: Record<MBTIKey, number> = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  answers.forEach((letter) => {
    if (['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'].includes(letter)) {
      scores[letter as MBTIKey]++;
    }
  });

  const type =
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P");

  return type;
};

