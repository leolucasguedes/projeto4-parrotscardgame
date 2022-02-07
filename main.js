window.addEventListener("resize", function () {
    alignCards();
});

let Moves;
let Time;
let StartTime;
let CanFlip;
let Compare;
let images;
let GameOver;
let CanSelect;

function alignCards() {
    const cardSize = 34 + 117 + 2;
    const cardsByLine = Math.trunc(window.innerWidth / cardSize);
    const rowLength = cardsByLine * cardSize;
    const margin = Math.trunc((window.innerWidth - rowLength) / 2);

    const element = document.querySelector(".cards");
    element.style.margin = "auto " + margin + "px";
}

function updateMoves() {
    const moves = document.getElementById("moves");
    moves.innerHTML = "<p>Moves: " + Moves + "</p>";
}

function updateTime() {
    const time = document.getElementById("time");
    time.innerHTML = "<p>Time: " + strTime() + "</p>";
}

start();