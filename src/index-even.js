import readlineSync from 'readline-sync';

const getRandomInt = (maxNumber) => {
  const randomInt = Math.floor(Math.random() * maxNumber) + 1;
  return randomInt;
};

const gameLoop = (name, totalRightGuessNum) => {
  let rightGuessNum = 0;
  const maxNumber = 50;
  while (rightGuessNum !== totalRightGuessNum) {
    const randomInt = getRandomInt(maxNumber);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    const isEven = randomInt % 2 === 0;
    if (isEven === answer) {
      console.log('Correct!');
      rightGuessNum += 1;
    } else {
      const correct = answer ? 'no' : 'yes';
      const notCorrect = answer ? 'yes' : 'no';
      console.log(`'${notCorrect}' is wrong ;(. Correct answer was '${correct}'`);
      console.log(`Let's try again, ${name}`);
    }
  }
};

export default () => {
  const totalRightGuessNum = 3;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`\nHello, ${name}!`);
  gameLoop(name, totalRightGuessNum);
  console.log(`Congratulations, ${name}!`);
};
