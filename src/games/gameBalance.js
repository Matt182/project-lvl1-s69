import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom } from '../randomInt';
import balanceNumber from '../balanceNumber';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 1000);

const message = 'What is the result of the expression?\n';

const getTurnVariable = () => {
  const number = randomIntFunction();
  const correctAnswer = balanceNumber(number);
  const result = cons(number, correctAnswer);
  return result;
};

const question = () => {
  const answer = readlineSync.questionInt('Your answer: ');
  return answer;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum, question);
};
