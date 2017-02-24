import toDigits from 'to-digits';
import { cons, car, cdr } from 'hexlet-pairs';

const balancePair = (digit1, digit2) => {
  const balancer = Math.floor(Math.abs(digit1 - digit2) / 2);
  let balancedNum1 = 0;
  let balancedNum2 = 0;
  if (digit1 > digit2) {
    balancedNum1 = digit1 - balancer;
    balancedNum2 = digit2 + balancer;
  } else {
    balancedNum1 = digit1 + balancer;
    balancedNum2 = digit2 - balancer;
  }
  const pair = cons(balancedNum1, balancedNum2);
  return pair;
};

const preBalance = (digits) => {
  const newDigits = digits;
  let unchanged = true;
  for (let i = digits.length - 1; i > 0; i -= 1) {
    if (Math.abs(digits[i] - digits[i - 1]) > 1) {
      unchanged = false;
      const balancedPair = balancePair(digits[i - 1], digits[i]);
      newDigits[i - 1] = car(balancedPair);
      newDigits[i] = cdr(balancedPair);
    }
  }
  if (unchanged) return newDigits;
  return preBalance(newDigits);
};

const toNumber = (digits) => {
  const number = digits.reduce((previousValue, currentValue) => {
    const result = (previousValue * 10) + currentValue;
    return result;
  }, 0);
  return number;
};

export default (number) => {
  const digits = toDigits(number);
  const preBalanced = preBalance(digits);
  const sorted = preBalanced.sort((a, b) => {
    const result = a - b;
    return result;
  });
  const resultNumber = toNumber(sorted);
  return resultNumber;
};
