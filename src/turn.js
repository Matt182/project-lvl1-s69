import { car, cdr } from 'hexlet-pairs';

export default (turnVariable, variableGenerator, correctMessage, wrongMessage) => {
  const turnVar = turnVariable;
  return (name) => {
    const turn = turnVar(variableGenerator);
    const question = car(turn);
    const correctAnswer = cdr(turn);
    console.log(`Question: ${question}`);
    return (answer) => {
      const result = correctAnswer === answer;
      if (result) {
        correctMessage();
        return true;
      }
      wrongMessage(name, answer, correctAnswer);
      return false;
    };
  };
};
