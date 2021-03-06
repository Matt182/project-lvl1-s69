import makeProgression from 'a-range';
import { cons } from 'hexlet-pairs';
import game from '../game';
import { getRandomInt } from '../randomInt';

const rightGuessNum = 3;

const message = 'What number is missing in this progression?';

const progressionLength = 10;

const getProgressionEnd = (start, step) => {
  const progressionEnd = start + (step * progressionLength);
  return progressionEnd;
};

const prepareProgressionForQuestion = (progression) => {
  const newProgression = progression;
  const randomIndex = getRandomInt(0, newProgression.length);
  const number = newProgression[randomIndex];
  newProgression[randomIndex] = '..';
  const question = newProgression.join(' ');
  const result = cons(question, number);
  return result;
};

const getTurnVariable = () => {
  const progressionStep = getRandomInt(1, 20);
  const progressionStart = getRandomInt(1, 20);
  const progressionEnd = getProgressionEnd(progressionStart, progressionStep);
  const progression = makeProgression(progressionStart, progressionEnd, progressionStep);
  const preparedProgression = prepareProgressionForQuestion(progression);
  return preparedProgression;
};

export default () => {
  game(message, getTurnVariable, rightGuessNum);
};
