import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import gcd from 'gcd';
import game from '../game';
import { prepareRandom } from '../randomInt';

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

const wrongMessage = (answer, correct) => {
  console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
};

const correctMessage = () => {
  console.log('Correct!');
};

const question = () => {
  const answer = readlineSync.questionInt('Your answer: ');
  return answer;
};

export default () => {
  game(message, getTurnVariable, 3, question, correctMessage, wrongMessage);
};
