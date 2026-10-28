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





