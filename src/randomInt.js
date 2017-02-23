const getRandomInt = (minNumber = 0, maxNumber = 50) => {
  const random = Math.floor(Math.random() * maxNumber) + minNumber;
  return random;
};

const prepareRandom = (min = 0, max = 50) => {
  const minNumber = min;
  const maxNumber = max;
  return () => {
    const random = getRandomInt(minNumber, maxNumber);
    return random;
  };
};

export { getRandomInt, prepareRandom };
