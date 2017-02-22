import { makePair, getQuestion, getAnswer } from './turnPair';
import getRandomInt from './randomInt';

const isEven = (number) => {
  const even = number % 2 === 0;
  return even;
};

const printCorrect = () => {
  console.log('Correct!');
};

const printNotCorrect = (name, answer) => {
  const correct = answer ? 'no' : 'yes';
  const notCorrect = answer ? 'yes' : 'no';
  console.log(`'${notCorrect}' is wrong ;(. Correct answer was '${correct}'`);
  console.log(`Let's try again, ${name}`);
};

export default (name) => {
  const maxNumber = 50;
  const randomInt = getRandomInt(maxNumber);
  const turn = makePair(randomInt, isEven(randomInt));
  console.log(`Question: ${getQuestion(turn)}`);
  return (answer) => {
    const result = getAnswer(turn) === answer;
    if (result) {
      printCorrect();
      return true;
    }
    printNotCorrect(name, answer);
    return false;
  };
};
