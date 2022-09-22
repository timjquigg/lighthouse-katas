/*
Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end, the number of tries needed should be printed.

Inputting the same number multiple times should only count as one try. If the user provides an answer which isn't a number, print an error message and do not count this as a try.
*/

let prompt = require("prompt-sync")({ sigint: true });
const answers = [];
const range = 10;
const secretNumber = Math.floor(Math.random() * range) + 1;

const checkAnswer = function (answer) {
  if (Number.isNaN(Number(answer))) {
    console.log(`Please enter a valid integer.`);
    return false;
  } else if (answers.includes(answer)) {
    console.log(`You have already guessed ${answer}. Please try a different number.`);
    return false;
  } else {
    answers.push(answer);
    if (answer > secretNumber) {
      console.log('Your guess is too high. Try again.');
      return false;
    } else if (answer < secretNumber) {
      console.log('You guess is too low. Try again.');
      return false;
    } else {
      console.log('You got it!');
      return true;
    }
  }
}

const getInput = function () {
  let answer = prompt(`Guess a number between 1 and ${range}: `);
  return checkAnswer(answer);
}

const game = function () {
  let status = getInput();
  while (!status) {
    status = getInput();
  }
  console.log(`It took you ${answers.length} attempts.`);
}

game();