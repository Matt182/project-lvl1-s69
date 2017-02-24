import { cons } from 'hexlet-pairs';
import gcd from 'gcd';
import game from '../game';
import { prepareRandom } from '../randomInt';
import { askInteger } from '../userIO';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 100);

const message = 'Find the greatest common divisor of given numbers.\n';

const getTurnVariable = () => {
  const randomInt1 = randomIntFunction();
  const randomInt2 = randomIntFunction();
  const question = `${randomInt1} ${randomInt2}`;
  const gcdAnswer = gcd(randomInt1, randomInt2);
  const result = cons(question, gcdAnswer);
  return result;
};

const question = askInteger;

export default () => {
  game(message, getTurnVariable, rightGuessNum, question);
};
