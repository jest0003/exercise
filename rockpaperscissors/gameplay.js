"use strict"
//console.log("Hello");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissors");

const players = document.querySelectorAll(".player");
const player1 = document.querySelector("#player1");
const playerPc = document.querySelector("#player2");

const pc_pick = ["rock", "paper", "scissors"];

const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");


document.addEventListener("DOMContentLoaded", init);

function init () {
rock.addEventListener("click", () => playRound ("rock"));
paper.addEventListener("click",  () => playRound ("paper"));
scissor.addEventListener("click",  () => playRound ("scissors"));
}

function randomPick() {
    return pc_pick[Math.floor(Math.random() * pc_pick.length)];
}

function playRound(playerChoice) {
    const pcChoice = randomPick();
    const result = getResult(playerChoice, pcChoice);

players.forEach(player => {
    player.classList.remove("rock", "paper", "scissors");
  });
  winText.classList.add("hidden");
  loseText.classList.add("hidden");
  drawText.classList.add("hidden");

    players.forEach(player => {
        player.classList.add("shake");
    });
     players.forEach(player => {
        player.classList.remove("rock", "paper", "scissors");
    });
setTimeout(() => {
        players.forEach(player => player.classList.remove("shake"));
        player1.classList.add(playerChoice);
     playerPc.classList.add(pcChoice);
        showResult (result);
    }, 1800);

}

function getResult(player, pc) {
    if (player === pc) {
        return "draw";
    }

    if (
        (player === "rock" && pc === "scissors") ||
        (player === "scissors" && pc === "paper") ||
        (player === "paper" && pc === "rock")
    ) {return "win";}

    return "lose";
}

function showResult(result) {

  if (result == "win") winText.classList.remove("hidden");
  if (result == "lose") loseText.classList.remove("hidden");
  if (result == "draw") drawText.classList.remove("hidden");
}