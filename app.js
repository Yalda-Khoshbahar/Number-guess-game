const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGuess = 0;

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "Please enter a valid number";
  } else if (+value < 1 || +value > 100) {
    return "Please enter a number between 1 to 100";
  }
};

const checkGuess = (guess) => {
  numberOfGuess++;
  if (guess === randomNumber) {
    console.log("You guessed correctly.");
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
    play();
  } else {
    console.log("Too high! Try again.");
    play();
  }
};

const play = () => {
  const number = prompt("Enter a number between 1 to 100");

  if (number === null) return;

  if (numberOfGuess >= 10) {
    console.log("Game Over!");
    return;
  }

  const validation = validateNumber(number);
  if (validation) {
    console.log(validation);
    return play();
  }

  checkGuess(+number);
};

play();
