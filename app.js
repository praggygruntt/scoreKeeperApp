// Create Targets
let team1Button = document.querySelector("#team1Button");
let team2Button = document.querySelector("#team2Button");
let resetButton = document.querySelector("#resetButton");
let team1ScoreDisplay = document.querySelector(".team1");
let team2ScoreDisplay = document.querySelector(".team2");
let winningScoreSelect = document.querySelector("#winningScore");


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
            team1ScoreDisplay.classList.add('has-text-success');
            team2ScoreDisplay.classList.add('has-text-danger');
            team1Button.disabled = true;
            team2Button.disabled = true;
        }
        team1ScoreDisplay.textContent = score1;

    }
});

team2Button.addEventListener("click", function () {
    if (!gameOver) {
        score2++;
        if (score2 === winningScore) {
            gameOver = true;
            team2ScoreDisplay.classList.add('has-text-success');
            team1ScoreDisplay.classList.add('has-text-danger');
            team1Button.disabled = true;
            team2Button.disabled = true;
        }
        team2ScoreDisplay.textContent = score2;

    }
});

const resetGame = function () {
    gameOver = false;
    [score1, score2] = [0, 0];
    team1ScoreDisplay.textContent = score1;
    team2ScoreDisplay.textContent = score2;
    team1ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    team2ScoreDisplay.classList.remove('has-text-success', 'has-text-danger');
    team1Button.disabled = false;
    team2Button.disabled = false;
}

resetButton.addEventListener("click", resetGame);

winningScoreSelect.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    resetGame();
})

