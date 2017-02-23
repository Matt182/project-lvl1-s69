import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const gameLoop = (name, makeTurn, rightGuessNum, totalRightGuessNum, question) => {
  if (rightGuessNum === totalRightGuessNum) return;
  const turn = makeTurn(name);
  const result = turn(question());
  const guessNum = result ? rightGuessNum + 1 : rightGuessNum;
  gameLoop(name, makeTurn, guessNum, totalRightGuessNum, question);
};

export default (message, turn, question) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(message);
  const name = askName();
  console.log(`\nHello, ${name}!`);
  gameLoop(name, turn, 0, 3, question);
  console.log(`Congratulations, ${name}!`);
};
