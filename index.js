let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let myH2 = document.getElementById("myH2");
let myH3 = document.getElementById("myH3");

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let attemps = 0;
let guess;
let running = true;

while(running) {

    myButton.onclick = function() {

        guess = Number(myInput.value);
        attemps++
        
        if(guess<minNum || guess> maxNum) {
            window.alert("Please enter number between 1-100.")
        } else if(guess < answer) {
            myH2.textContent = "Too Low!";
        } else if(guess > answer) {
            myH2.textContent = "Too High!";
        } else if(guess == answer) {
            myH2.textContent = `Congratulation! YOU WIN!`;
            myH3.textContent = `You're attemps are: ${attemps}`
        }

    }
    running = false;
}