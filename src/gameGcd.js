import readlineSync from 'readline-sync';
import game from './game';
import gcdTurn from './gcdTurn';

export default () => {
  const message = 'Find the greatest common divisor of given numbers.\n';
  const turn = gcdTurn;
  const question = () => {
    const answer = readlineSync.questionInt('Your answer: ');
    return answer;
  };
  game(message, turn, question);
};
