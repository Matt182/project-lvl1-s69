export default (minNumber = 0, maxNumber = 50) => {
  const randomInt = Math.floor(Math.random() * maxNumber) + minNumber;
  return randomInt;
};
