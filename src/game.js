import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const gameLoop = (name, getTurnVariable, rightGuessNum, totalRightGuessNum,
    question, correctMessage, wrongMessage) => {
  if (rightGuessNum === totalRightGuessNum) return;
  const turn = getTurnVariable();
  console.log(`Question: ${car(turn)}`);
  const answer = question();
  const result = cdr(turn) === answer;
  if (result) {
    correctMessage();
  } else {
    wrongMessage(answer, cdr(turn));
    console.log(`Let's try again, ${name}`);
  }
  const guessNum = result ? rightGuessNum + 1 : rightGuessNum;
  gameLoop(name, getTurnVariable, guessNum,
    totalRightGuessNum, question, correctMessage, wrongMessage);
};

export default (message, getTurnVariable, rounds, question, correctMessage, wrongMessage) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(message);
  const name = askName();
  console.log(`\nHello, ${name}!`);
  gameLoop(name, getTurnVariable, 0, rounds, question, correctMessage, wrongMessage);
  console.log(`Congratulations, ${name}!`);
};
