export default (maxNumber) => {
  const randomInt = Math.floor(Math.random() * maxNumber) + 1;
  return randomInt;
};
