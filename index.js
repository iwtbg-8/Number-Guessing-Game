let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let myH2 = document.getElementById("myH2");
let myH3 = document.getElementById("myH3");

const minNum = 1;
const maxNum = 100;
// Generate the random number answer
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true; // Still using a running flag for clarity

// Initial message
myH2.textContent = `Guess a number between ${minNum} and ${maxNum}.`;

// Function to handle the guess logic
function checkGuess() {
    if (!running) return; // Stop if the game is over

    let guess = Number(myInput.value);
    
    // Check if input is empty or not a number
    if (myInput.value === '' || isNaN(guess)) {
        myH2.textContent = "Please enter a valid number.";
        myInput.value = ''; // Clear input
        return;
    }

    attempts++;

    if (guess < minNum || guess > maxNum) {
        // Since we cannot use alert(), we'll display the message in myH2
        myH2.textContent = `Error: Please enter a number between ${minNum} and ${maxNum}.`;
    } else if (guess < answer) {
        myH2.textContent = "Too Low! Try again.";
    } else if (guess > answer) {
        myH2.textContent = "Too High! Try again.";
    } else if (guess === answer) {
        // Player wins
        myH2.textContent = `Congratulation! YOU WIN! The number was ${answer}!`;
        myH3.textContent = `You took ${attempts} attempts.`;
        running = false; // Stop the game
        myButton.disabled = true;
    }
    
    myInput.value = ''; // Clear input field after each guess
    myInput.focus(); // Keep focus on the input field
}

// Attach the function to the button click
myButton.onclick = checkGuess;

// Allow pressing Enter key to submit the guess
myInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
