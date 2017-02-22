import { makePair, getQuestion, getAnswer } from './turnPair';
import getRandomInt from './randomInt';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(signs.length - 1)];
  return sign;
};

const getExpressionAnswer = (sign, lvalue, rvalue) => {
  switch (sign) {
    case '+':
      return lvalue + rvalue;
    case '-':
      return lvalue - rvalue;
    default:
      return lvalue * rvalue;
  }
};

const printCorrect = () => {
  console.log('Correct!');
};

const printNotCorrect = (name, answer, correct) => {
  console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
  console.log(`Let's try again, ${name}`);
};

export default (name) => {
  const maxNumber = 50;
  const lvalue = getRandomInt(maxNumber);
  const rvalue = getRandomInt(maxNumber);
  const sign = getRandomSign();
  const expressionAnswer = getExpressionAnswer(sign, lvalue, rvalue);
  const turn = makePair(`${lvalue} ${sign} ${rvalue}`, expressionAnswer);
  console.log(`Question: ${getQuestion(turn)}`);
  return (answer) => {
    const result = getAnswer(turn) === answer;
    if (result) {
      printCorrect();
      return true;
    }
    printNotCorrect(name, answer, getAnswer(turn));
    return false;
  };
};
