// Create Targets
let team1Button = document.querySelector("#team1Button");
let team2Button = document.querySelector("#team2Button");
let resetButton = document.querySelector("#resetButton");
let team1ScoreDisplay = document.querySelector(".team1");
let team2ScoreDisplay = document.querySelector(".team2");
let winningScoreSelect = document.querySelector("#winningScore");
let headline = document.querySelector("h1");

// Variables
let score1 = 0;
let score2 = 0;
let winningScore = 3;
let gameOver = false;



// Scoring Logic


team1Button.addEventListener("click", function () {
    if (!gameOver) {
        score1++;
        if (score1 === winningScore) {
            gameOver = true;
            headline.innerText = "Team 1 Wins the Game!";
            team1ScoreDisplay.style.color = "green";
            team2ScoreDisplay.style.color = "gray";
        }
        team1ScoreDisplay.textContent = score1;
    }
});

team2Button.addEventListener("click", function () {
    if (!gameOver) {
        score2++;
        if (score2 === winningScore) {
            gameOver = true;
            headline.innerText = "Team 2 Wins the Game!";
            team2ScoreDisplay.style.color = "green";
            team1ScoreDisplay.style.color = "gray";

        }
        team2ScoreDisplay.textContent = score2;
    }
});

const resetGame = function () {
    gameOver = false;
    [score1, score2] = [0, 0];
    team1ScoreDisplay.textContent = score1;
    team2ScoreDisplay.textContent = score2;
    headline.innerText = "Volleyball Scorekeeper";
    team2ScoreDisplay.style.color = "orange";
    team1ScoreDisplay.style.color = "darkturquoise";
}

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    resetGame();
})

