import { cons, car, cdr } from 'hexlet-pairs';
import toDigits from 'to-digits';
import game from '../game';
import { prepareRandom } from '../randomInt';

const balancePair = (max, min) => {
  const balancer = Math.floor((max - min) / 2);
  const balancedMax = max - balancer;
  const balancedMin = min + balancer;
  const pair = cons(balancedMax, balancedMin);
  return pair;
};

const sortDigits = (digits) => {
  const sorted = digits.sort((a, b) => {
    const result = a - b;
    return result;
  });
  return sorted;
};

const balance = (digits) => {
  let unchanged = true;
  const newDigits = sortDigits(digits);
  const max = newDigits[newDigits.length - 1];
  const min = newDigits[0];
  if (max - min > 1) {
    unchanged = false;
    const balancedPair = balancePair(max, min);
    newDigits[newDigits.length - 1] = car(balancedPair);
    newDigits[0] = cdr(balancedPair);
  }
  if (unchanged) return newDigits;
  return balance(newDigits);
};

const toNumber = (digits) => {
  const number = digits.reduce((previousValue, currentValue) => {
    const result = (previousValue * 10) + currentValue;
    return result;
  }, 0);
  return number;
};

const balanceNumber = (number) => {
  const digits = toDigits(number);
  const balanced = balance(digits);
  const resultNumber = toNumber(balanced);
  return resultNumber;
};

const rightGuessNum = 3;

const randomIntFunction = prepareRandom(0, 1000);

const message = 'Balance the given number.';

const getTurnVariable = () => {
  const number = randomIntFunction();
  const correctAnswer = balanceNumber(number);
  const result = cons(number, correctAnswer);
  return result;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum);
};
