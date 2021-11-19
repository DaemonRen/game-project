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
// const playerScore_span = document.getElementById("score-display");
// const aiScore_span = document.getElementById("aiscore-display");

let choicePressed;
const aiChoice = ["Rock", "Paper", "Scissors"];
// let aiChoicePressed;
let userScore = 0;
let aiScore = 0;
let result;
let gameOverWin;
let gameOverLose;
// console.log(choicePressed);
prompt.innerHTML = "Your move!"

choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        choicePressed = event.target.innerHTML;
        playerOne.innerHTML = choicePressed;
        // console.log(choicePressed);
        setTimeout(() => { 
            // alert("Test");
            for (i = 0; i < aiChoice.length; i++){
                const aiChoicePressed = aiChoice[Math.floor(Math.random() * aiChoice.length)];
                playerTwo.innerText = aiChoicePressed;
                // console.log(choicePressed + aiChoicePressed);
                switch (choicePressed + aiChoicePressed) {
                    case "RockRock":
                        console.log("Draw");
                        prompt.innerHTML = "Draw"
                        break;
                    case "RockPaper":
                        console.log("Loss");
                        prompt.innerHTML = "Loss"
                        break;
                    case "RockScissors":
                        console.log("Win");
                        prompt.innerHTML = "Win"
                        break;
                    case "ScissorsRock":
                        console.log("Loss");
                        prompt.innerHTML = "Loss"
                        break;
                    case "ScissorsPaper":
                        console.log("Win");
                        prompt.innerHTML = "Win"
                        break;
                    case "ScissorsScissors":
                        console.log("Draw");
                        prompt.innerHTML = "Draw"
                        break;
                    case "PaperRock":
                        console.log("Win");
                        prompt.innerHTML = "Win"
                        break;
                    case "PaperPaper":
                        console.log("Draw");
                        prompt.innerHTML = "Draw"
                        break;
                    case "PaperScissors":
                        console.log("Loss");
                        prompt.innerHTML = "Loss"
                        break;
                    default:
                };
            };
        }, 1000);
    })
});

// let playerScore_span = document.getElementById("score-display");
// let aiScore_span = document.getElementById("aiscore-display");

// if (prompt.innerHTML = "Win") {
//     userScore = userScore + 1; 
//     playerScore_span.innerHTML = userScore
// } else if (prompt.innerHTML = "Draw") {
//     playerScore_span.innerHTML = userScore
//     aiScore_span.innerHTML = aiScore
// } else if (prompt.innerHTML = "Loss") {
//     aiScore = aiScore + 1; 
//     aiScore_span_span.innerHTML = userScore
// } else {
//     prompt.innerHTML = "Your move!"
// }








