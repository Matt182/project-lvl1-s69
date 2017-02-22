import { cons, car, cdr } from 'hexlet-pairs';

const makePair = (question, answer) => {
  const pair = cons(question, answer);
  return pair;
};

const getQuestion = (pair) => {
  const question = car(pair);
  return question;
};

const getAnswer = (pair) => {
  const answer = cdr(pair);
  return answer;
};

export { makePair, getQuestion, getAnswer };
