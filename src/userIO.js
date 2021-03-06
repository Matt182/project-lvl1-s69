import readlineSync from 'readline-sync';

export const print = (message) => {
  console.log(message);
};

export const printNewLine = () => {
  console.log();
};

export const askQuestion = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};
