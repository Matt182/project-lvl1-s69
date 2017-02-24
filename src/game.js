import { car, cdr } from 'hexlet-pairs';
import { askName, print } from './userIO';

const startRound = 0;

const gameLoop = (name, getTurnVariable, rightGuessNum, totalRightGuessNum, question) => {
  if (rightGuessNum === totalRightGuessNum) return;
  const turn = getTurnVariable();
  print(`Question: ${car(turn)}`);
  const answer = question();
  const result = cdr(turn) === answer;
  if (result) {
    print('Correct!');
  } else {
    print(`'${answer}' is wrong ;(. Correct answer was '${cdr(turn)}'`);
    print(`Let's try again, ${name}`);
  }
  const guessNum = result ? rightGuessNum + 1 : rightGuessNum;
  gameLoop(name, getTurnVariable, guessNum, totalRightGuessNum, question);
};

export default (message, getTurnVariable, rightGuessNum, question) => {
  print('Welcome to the Brain Games!\n');
  print(message);
  const name = askName();
  print(`\nHello, ${name}!`);
  gameLoop(name, getTurnVariable, startRound, rightGuessNum, question);
  print(`Congratulations, ${name}!`);
};
