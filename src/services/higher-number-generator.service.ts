let initialNumber = 100;

export const generateHigherNewNumber = () : Promise<number> => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber += 1;
      resolve(initialNumber)
    }, 150)
  });
}