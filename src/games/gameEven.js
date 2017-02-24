import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom } from '../randomInt';

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 100);

const message = 'Answer "yes" if number even otherwise answer "no".\n';

const getTurnVariable = () => {
  const randomInt = randomIntFunction();
  const isEven = randomInt % 2 === 0 ? 'yes' : 'no';
  const result = cons(randomInt, isEven);
  return result;
};

const question = () => {
  const answer = readlineSync.question('Your answer: ', {
    limit: ['yes', 'no'],
  });
  return answer;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum, question);
};
