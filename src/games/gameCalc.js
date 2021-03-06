import { cons } from 'hexlet-pairs';
import game from '../game';
import { prepareRandom, getRandomInt } from '../randomInt';

const rightGuessNum = 3;

const signs = ['+', '-', '*'];

const getRandomSign = () => {
  const sign = signs[getRandomInt(0, signs.length)];
  return sign;
};

const randomIntFunction = prepareRandom(0, 100);

const message = 'What is the result of the expression?';

const getTurnVariable = () => {
  const lvalue = randomIntFunction();
  const rvalue = randomIntFunction();
  const sign = getRandomSign();
  const expression = `${lvalue} ${sign} ${rvalue}`;
  /* eslint no-eval: off */
  const expressionAnswer = eval(expression);
  const result = cons(expression, expressionAnswer);
  return result;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum);
};
