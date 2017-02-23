import readlineSync from 'readline-sync';
import { cons } from 'hexlet-pairs';
import game from './game';
import makeTurn from './turn';
import { prepareRandom } from './randomInt';

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".\n';

  const turnGenerator = (randomFunction) => {
    const random = randomFunction;
    return () => {
      const randomInt = random();
      const isEven = randomInt % 2 === 0;
      const result = cons(randomInt, isEven);
      return result;
    };
  };

  const randomFunction = prepareRandom(0, 100);
  const variableGenerator = turnGenerator(randomFunction);
  const turnVariable = (variable) => {
    const result = variable();
    return result;
  };

  const correctMessage = () => {
    console.log('Correct!');
  };

  const wrongMessage = (name, answer) => {
    const correct = answer ? 'no' : 'yes';
    const notCorrect = answer ? 'yes' : 'no';
    console.log(`'${notCorrect}' is wrong ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${name}`);
  };

  const turn = makeTurn(turnVariable, variableGenerator, correctMessage, wrongMessage);
  const question = () => {
    const answer = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });
    return answer;
  };

  game(message, turn, 3, question);
};
