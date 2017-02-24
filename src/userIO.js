import readlineSync from 'readline-sync';

export const askYesNo = () => {
  const answer = readlineSync.question('Your answer: ', {
    limit: ['yes', 'no'],
  });
  return answer;
};

export const askInteger = () => {
  const answer = readlineSync.questionInt('Your answer: ');
  return answer;
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const print = (message) => {
  console.log(message);
};
