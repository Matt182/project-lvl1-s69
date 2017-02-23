import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import gcd from 'gcd';
import game from './game';
import makeTurn from './turn';
import { prepareRandom } from './randomInt';

export default () => {
  const message = 'Find the greatest common divisor of given numbers.\n';
  const turnGenerator = (randomIntFunction) => {
    const randomInt = randomIntFunction;
    return () => {
      const randomInt1 = randomInt();
      const randomInt2 = randomInt();
      const question = `${randomInt1} ${randomInt2}`;
      const gcdAnswer = gcd(randomInt1, randomInt2);
      const result = cons(question, gcdAnswer);
      return result;
    };
  };
  const getRandomInt = prepareRandom(0, 100);
  const variableGenerator = turnGenerator(getRandomInt);
  const turnVariable = (variable) => {
    const result = variable();
    return result;
  };
  const wrongMessage = (name, answer, correct) => {
    console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${name}`);
  };

  const correctMessage = () => {
    console.log('Correct!');
  };
  const turn = makeTurn(turnVariable, variableGenerator, correctMessage, wrongMessage);
  const question = () => {
    const answer = readlineSync.questionInt('Your answer: ');
    return answer;
  };
  game(message, turn, 3, question);
};
