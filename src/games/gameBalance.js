import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom } from '../randomInt';
import balanceNumber from '../balanceNumber';
import { askInteger } from '../userIO';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 1000);

const message = 'Balance the given number.\n';

const getTurnVariable = () => {
  const number = randomIntFunction();
  const correctAnswer = balanceNumber(number);
  const result = cons(number, correctAnswer);
  return result;
};

const question = askInteger;

export default () => {
  game(message, getTurnVariable, rightGuessNum, question);
};
