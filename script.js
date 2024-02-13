let score = 0;
let playAgain = true;

while (playAgain) {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

  if (userGuess === randomnumber) {
    alert("Congratulations! You guessed the correct number.");
    score++;
  } else {
    alert(`Sorry, the correct number was ${randomnumber}. You lose.`);
  }

  playAgain = confirm("Do you want to play again?");

  if (!playAgain) {
    alert(`Game over. Your final score is ${score}.`);
  }
}
