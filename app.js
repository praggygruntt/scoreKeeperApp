// Element Targets

let resetButton = document.querySelector("#resetButton");
let winningScoreSelect = document.querySelector("#winningScore");

// Variables & Objects

let winningScore = 3;
let gameOver = false;

const t1 = {
    score: 0,
    button: document.querySelector("#team1Button"),
    display: document.querySelector(".team1")
};
const t2 = {
    score: 0,
    button: document.querySelector("#team2Button"),
    display: document.querySelector(".team2")
};

// Functions

function updateScores(team, opponent) {
    if (!gameOver) {
        team.score++;
        if (team.score === winningScore) {
            gameOver = true;
            team.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            team.button.disabled = true;
            opponent.button.disabled = true;
        }
        team.display.textContent = team.score;

    }
}

const resetGame = function () {
    gameOver = false;
    for (let t of [t1, t2]) {
        t.score = 0;
        t.display.textContent = 0;
        t.display.classList.remove('has-text-success', 'has-text-danger');
        t.button.disabled = false;
    }
}

// Event Listeners

t1.button.addEventListener("click", function () { updateScores(t1, t2) });
t2.button.addEventListener("click", function () { updateScores(t2, t1) });
resetButton.addEventListener("click", resetGame);
winningScoreSelect.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    resetGame();
})

