import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startRound = 0;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const gameLoop = (name, getTurnVariable, rightGuessNum, totalRightGuessNum, question) => {
  if (rightGuessNum === totalRightGuessNum) return;
  const turn = getTurnVariable();
  console.log(`Question: ${car(turn)}`);
  const answer = question();
  const result = cdr(turn) === answer;
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong ;(. Correct answer was '${cdr(turn)}'`);
    console.log(`Let's try again, ${name}`);
  }
  const guessNum = result ? rightGuessNum + 1 : rightGuessNum;
  gameLoop(name, getTurnVariable, guessNum, totalRightGuessNum, question);
};

export default (message, getTurnVariable, rightGuessNum, question) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(message);
  const name = askName();
  console.log(`\nHello, ${name}!`);
  gameLoop(name, getTurnVariable, startRound, rightGuessNum, question);
  console.log(`Congratulations, ${name}!`);
};
