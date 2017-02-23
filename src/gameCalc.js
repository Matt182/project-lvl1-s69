import readlineSync from 'readline-sync';
import game from './game';
import calcTurn from './calcTurn';

export default () => {
  const message = 'What is the result of the expression?\n';
  const turn = calcTurn;
  const question = () => {
    const answer = readlineSync.questionInt('Your answer: ');
    return answer;
  };
  game(message, turn, question);
};
