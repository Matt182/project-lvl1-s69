import { cons } from 'hexlet-pairs';
import isPrime from 'is-prime';
import game from '../game';
import { prepareRandom } from '../randomInt';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 100);

const message = 'Answer "yes" if number is prime otherwise answer "no".';

const getTurnVariable = () => {
  const randomInt = randomIntFunction();
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';
  const result = cons(randomInt, correctAnswer);
  return result;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum);
};
