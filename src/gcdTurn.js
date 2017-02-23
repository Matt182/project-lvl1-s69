import gcd from 'gcd';
import getRandomInt from './randomInt';

const printNotCorrect = (name, answer, correct) => {
  console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
  console.log(`Let's try again, ${name}`);
};

const printCorrect = () => {
  console.log('Correct!');
};

export default (name) => {
  const maxNumber = 50;
  const randomInt1 = getRandomInt(maxNumber);
  const randomInt2 = getRandomInt(maxNumber);
  const gcdAnswer = gcd(randomInt1, randomInt2);
  const question = `${randomInt1} ${randomInt2}`;
  console.log(`Question: ${question}`);
  return (answer) => {
    const result = gcdAnswer === answer;
    if (result) {
      printCorrect();
      return true;
    }
    printNotCorrect(name, answer, gcdAnswer);
    return false;
  };
};
