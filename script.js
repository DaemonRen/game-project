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
let playerScore_span = document.getElementById("score-display") 
let aiScore_span = document.getElementById("aiscore-display");
const restartBtn = document.getElementById("restart-btn")

let choicePressed;

// let aiChoicePressed;
let userScore = 0;
let aiScore = 0;
let result;
let gameOverWin;
let gameOverLose;
// console.log(choicePressed);

aiScore_span.innerHTML = 0;
playerScore_span.innerHTML = 0;

const aiChoicePressed = (() => {
    const aiChoice = ["Rock", "Paper", "Scissors"];
    for (i = 0; i < aiChoice.length; i++) {
        const aiChoicePressed = aiChoice[Math.floor(Math.random() * aiChoice.length)];
        playerTwo.innerHTML = aiChoicePressed;
    }
});

const resolve = (() => {
    switch (choicePressed + playerTwo.innerHTML) {
        case "RockRock":
        case "ScissorsScissors":
        case "PaperPaper":
            // console.log("Draw");
            prompt.innerHTML = "Draw";
            draw();
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            // console.log("Loss");
            prompt.innerHTML = "Loss"
            lose();
            break;
        case "RockScissors":
        case "ScissorsPaper":
        case "PaperRock":
            // console.log("Win");
            prompt.innerHTML = "Win"
            win ();
            break;
    };
});

const win = (() => {
    console.log("Win");
    userScore++;
    playerScore_span.innerHTML = userScore;
    if (userScore >= 3) {
        prompt.innerHTML = "You win!";
        // choices.classList.add("invisible");
        restartBtn.classList.remove(".invisible");
    }
});

const lose = (() => {
    console.log("Lose");
    aiScore = aiScore + 1;
    aiScore_span.innerHTML = aiScore
    if (aiScore >= 3) {
        prompt.innerHTML = "You lose!";
        // choices.classList.add("invisible");
        restartBtn.classList.remove(".invisible");
    }
});

const draw = (() => {
    console.log("Draw");
});

choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        choicePressed = event.target.innerHTML;
        playerOne.innerHTML = choicePressed;
        // console.log(choicePressed);
        setTimeout(() => { 
            // alert("Test");
            aiChoicePressed ();
            // console.log(aiChoicePressed);
            resolve ();
        }, 1000);

    })
});

restart.addEventListener("click", () => {
    userScore = 0;
    aiScore =0;
    prompt.innerHTML = "Your turn!";
    restartBtn.classList.add("invisible");
    choices.classList.remove("invisible");
});




