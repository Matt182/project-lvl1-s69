import readlineSync from 'readline-sync';
import game from './game';
import evenTurn from './evenTurn';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';
  const turn = evenTurn;
  const question = () => {
    const answer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    return answer;
  };
  game(message, turn, question);
};
