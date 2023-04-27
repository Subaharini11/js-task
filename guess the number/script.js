var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
	var guess = parseInt(document.getElementById("guess").value);
	var message = document.getElementById("message");
	if (guess == randomNumber) {
		message.innerHTML = "Congratulations! You guessed the number!";
	} else if (guess < randomNumber) {
		message.innerHTML = "Too low! Guess again.";
	} else {
		message.innerHTML = "Too high! Guess again.";
	}
}