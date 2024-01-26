// Generate a random number between 1 and 10
const secretNumber = Math.floor(Math.random() * 10) + 1;

// Get HTML elements
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");

// Function to check the guessed number
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "Please enter a valid number between 1 and 10.";
        message.style.color = "red";
    } else {
        if (userGuess === secretNumber) {
            message.textContent = "Congratulations! You guessed the correct number!";
            message.style.color = "green";
            disableInputAndButton();
        } else {
            message.textContent = "Wrong guess. Try again!";
            message.style.color = "red";
        }
    }
}

// Function to disable input and button after correct guess
function disableInputAndButton() {
    guessInput.disabled = true;
    document.querySelector("button").disabled = true;
}
