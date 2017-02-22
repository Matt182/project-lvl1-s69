import readlineSync from 'readline-sync';
import evenTurn from './evenTurn';
import calcTurn from './calcTurn';

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

export default (game) => {
  let message = '';
  let gameTurn = '';
  let question = '';

  switch (game) {
    case 'even': {
      message = 'Answer "yes" if number even otherwise answer "no".\n';
      gameTurn = evenTurn;
      question = () => {
        const answer = readlineSync.question('Your answer: ', {
          trueValue: ['yes'],
          falseValue: ['no'],
        });
        return answer;
      };
      break;
    }

    default: {
      message = 'What is the result of the expression?\n';
      gameTurn = calcTurn;
      question = () => {
        const answer = readlineSync.questionInt('Your answer: ');
        return answer;
      };
      break;
    }
  }
  console.log('Welcome to the Brain Games!\n');
  console.log(message);
  const name = askName();
  console.log(`\nHello, ${name}!`);
  gameLoop(name, gameTurn, 0, 3, question);
  console.log(`Congratulations, ${name}!`);
};
