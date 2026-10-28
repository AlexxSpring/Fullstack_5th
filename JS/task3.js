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


