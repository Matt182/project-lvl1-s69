import readlineSync from 'readline-sync';
import mathjs from 'mathjs';
import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom, getRandomInt } from '../randomInt';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(0, signs.length - 1)];
  return sign;
};

const randomIntFunction = prepareRandom(0, 100);

export default () => {
  const message = 'What is the result of the expression?\n';

  const getTurnVariable = () => {
    const lvalue = randomIntFunction();
    const rvalue = randomIntFunction();
    const sign = getRandomSign();
    const expression = `${lvalue} ${sign} ${rvalue}`;
    const expressionAnswer = mathjs.eval(expression);
    const result = cons(expression, expressionAnswer);
    return result;
  };

  const correctMessage = () => {
    console.log('Correct!');
  };

  const wrongMessage = (answer, correct) => {
    console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
  };

  const question = () => {
    const answer = readlineSync.questionInt('Your answer: ');
    return answer;
  };

  game(message, getTurnVariable, 3, question, correctMessage, wrongMessage);
};
