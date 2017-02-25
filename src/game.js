import { car, cdr } from 'hexlet-pairs';
import { askQuestion, print, printNewLine } from './userIO';

const startRound = 0;

const gameLoop = (name, getTurnVariable, rightGuessNum, totalRightGuessNum) => {
  if (rightGuessNum === totalRightGuessNum) return;
  const turn = getTurnVariable();
  print(`Question: ${car(turn)}`);
  const answer = askQuestion('Your answer: ');
  const actualAnswer = Number.isInteger(cdr(turn)) ? parseInt(answer, 10) : answer;
  const result = cdr(turn) === actualAnswer;
  if (result) {
    print('Correct!');
  } else {
    print(`'${actualAnswer}' is wrong ;(. Correct answer was '${cdr(turn)}'`);
    print(`Let's try again, ${name}`);
  }
  const guessNum = result ? rightGuessNum + 1 : rightGuessNum;
  gameLoop(name, getTurnVariable, guessNum, totalRightGuessNum);
};

export default (message, getTurnVariable, rightGuessNum) => {
  print('Welcome to the Brain Games!');
  printNewLine();
  print(message);
  printNewLine();
  const name = askQuestion('May I have your name? ');
  printNewLine();
  print(`Hello, ${name}!`);
  gameLoop(name, getTurnVariable, startRound, rightGuessNum);
  print(`Congratulations, ${name}!`);
};
