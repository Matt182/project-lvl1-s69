import readlineSync from 'readline-sync';
import mathjs from 'mathjs';
import { cons } from 'hexlet-pairs';
import game from './game';
import makeTurn from './turn';
import getRandomInt from './randomInt';

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomInt(0, signs.length - 1)];
  return sign;
};

export default () => {
  const message = 'What is the result of the expression?\n';
  const turnGenerator = (randomIntFunction, randomSignFunction) => {
    const randomInt = randomIntFunction;
    const randomSign = randomSignFunction;
    return () => {
      const lvalue = randomInt();
      const rvalue = randomInt();
      const sign = randomSign();
      const expression = `${lvalue} ${sign} ${rvalue}`;
      const expressionAnswer = mathjs.eval(expression);
      const result = cons(expression, expressionAnswer);
      return result;
    };
  };
  const variableGenerator = turnGenerator(getRandomInt, getRandomSign);
  const turnVariable = (variable) => {
    const result = variable();
    return result;
  };
  const correctMessage = () => {
    console.log('Correct!');
  };

  const wrongMessage = (name, answer, correct) => {
    console.log(`'${answer}' is wrong ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${name}`);
  };
  const turn = makeTurn(turnVariable, variableGenerator, correctMessage, wrongMessage);
  const question = () => {
    const answer = readlineSync.questionInt('Your answer: ');
    return answer;
  };
  game(message, turn, question);
};
