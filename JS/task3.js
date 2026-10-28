let score = 0;
let timeLeft = 30;

let scoreDisplay = document.getElementById("score");
let timeDisplay = document.getElementById("time");
let grid = document.getElementById("grid");
let startBtn = document.getElementById("startBtn");

let moleInterval;
let gameTimer;



for (let i = 0; i < 9; i++) {
    let cell = document.createElement("div");

    cell.classList.add("cell");
    cell.dataset.index = i;

    grid.appendChild(cell);
}


// Mole appears in a random cell every second


function showMole() {
    let cells = document.querySelectorAll(".cell");

    cells.forEach(function(cell) {
        cell.classList.remove("mole");
        cell.textContent = "";
    });

    let randomIndex = Math.floor(Math.random() * 9);
    let randomCell = cells[randomIndex];

    randomCell.classList.add("mole");
    randomCell.textContent = "MOLE";
}


// start button, shows score and stuff

grid.addEventListener("click", function(event) {
    if (event.target.classList.contains("mole")) {
        score++;
        scoreDisplay.textContent = score;

        event.target.classList.remove("mole");
        event.target.textContent = "";
    }
});



// Final 

startBtn.addEventListener("click", function() {
    clearInterval(moleInterval);
    clearInterval(gameTimer);

    score = 0;
    timeLeft = 30;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    startBtn.disabled = true;

    showMole();

    // Show a new mole every 800 milliseconds
    moleInterval = setInterval(showMole, 800);

    // Reduce time every second
    gameTimer = setInterval(function() {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(moleInterval);
            clearInterval(gameTimer);

            document.querySelectorAll(".cell").forEach(function(cell) {
                cell.classList.remove("mole");
                cell.textContent = "";
            });

            startBtn.disabled = false;
            alert("Game Over! Your score is " + score);
        }
    }, 1000);
});




