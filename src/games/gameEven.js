import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom } from '../randomInt';

const randomIntFunction = prepareRandom(0, 100);

const message = 'Answer "yes" if number even otherwise answer "no".\n';

const getTurnVariable = () => {
  const randomInt = randomIntFunction();
  const isEven = randomInt % 2 === 0;
  const result = cons(randomInt, isEven);
  return result;
};

const correctMessage = () => {
  console.log('Correct!');
};

const wrongMessage = (answer) => {
  const correct = answer ? 'no' : 'yes';
  const notCorrect = answer ? 'yes' : 'no';
  console.log(`'${notCorrect}' is wrong ;(. Correct answer was '${correct}'`);
};

const question = () => {
  const answer = readlineSync.question('Your answer: ', {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  return answer;
};

export default () => {
  game(message, getTurnVariable, 3, question, correctMessage, wrongMessage);
};
