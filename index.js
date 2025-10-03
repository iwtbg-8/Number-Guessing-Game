let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let myH2 = document.getElementById("myH2");
let myH3 = document.getElementById("myH3");

const minNum = 1;
const maxNum = 100;
// Generate random number answer
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true; // Still using a running flag for clarity


myH2.textContent = `Guess a number between ${minNum} and ${maxNum}.`;


function checkGuess() {
    if (!running) return;

    let guess = Number(myInput.value);
    

    if (myInput.value === '' || isNaN(guess)) {
        myH2.textContent = "Please enter a valid number.";
        myInput.value = '';
        return;
    }

    attempts++;

    if (guess < minNum || guess > maxNum) {

        myH2.textContent = `Error: Please enter a number between ${minNum} and ${maxNum}.`;
    } else if (guess < answer) {
        myH2.textContent = "Too Low! Try again.";
    } else if (guess > answer) {
        myH2.textContent = "Too High! Try again.";
    } else if (guess === answer) {
       
        myH2.textContent = `Congratulation! YOU WIN! The number was ${answer}!`;
        myH3.textContent = `You took ${attempts} attempts.`;
        running = false; 
        myButton.disabled = true;
    }
    
    myInput.value = '';
    myInput.focus(); 
}


myButton.onclick = checkGuess;


myInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
