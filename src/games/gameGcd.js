import { cons } from 'hexlet-pairs';
import gcd from 'gcd';
import game from '../game';
import { prepareRandom } from '../randomInt';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 100);

const message = 'Find the greatest common divisor of given numbers.';

const getTurnVariable = () => {
  const randomInt1 = randomIntFunction();
  const randomInt2 = randomIntFunction();
  const question = `${randomInt1} ${randomInt2}`;
  const gcdAnswer = gcd(randomInt1, randomInt2);
  const result = cons(question, gcdAnswer);
  return result;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum);
};
