let initialNumber = 0;

export const generateNewNumber = () : Promise<number> => {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      initialNumber += 1;
      resolve(initialNumber)
    }, 1501)
  });
}