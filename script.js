// Rock Paper Scissors

// buttons that when click display your choice in a larger form
// 1. prompt to press button, disappears once button pressed
// 2. once button pressed, 1 second delay then AI "presses button"
// 3. once both buttons pressed, result decided (win, draw)
// 4. once result decided, +1 score to winner, or +0 points to both if draw
// 5. Back to #1
// if player score =3, Congratulations message and prompt play again
// if AI score =3, Git gud message and prompt play again

// 3 way win loss draw mechanic

// AI opponent random choice

// score tracker, best of five?




const rock = document.getElementById("choice-rock");
const paper = document.getElementById("choice-paper");
const scissors = document.getElementById("choice-scissors");
const choices = document.querySelectorAll(".choices");
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const prompt = document.getElementById("prompt-text");
const playerScore = document.getElementById("score-display");
const aiScore = document.getElementById("aiscore-display");

let choicePressed;
let aiChoice = ["rock", "paper", "scissors"]
let aiChoicePressed;
let gameOverWin;
let gameOverLose;
// console.log(choicePressed);

choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        choicePressed = event.target.innerHTML;
        playerOne.innerHTML = choicePressed;
        console.log(choicePressed);
        prompt.innerHTML = "";
        setTimeout(function() { 
            // alert("Test");
        }, 1000);
    })
});







