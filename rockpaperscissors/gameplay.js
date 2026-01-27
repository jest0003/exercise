"use strict"
//console.log("Hello");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissors");
const players = document.querySelectorAll(".player");
const player1 = document.querySelector("#player1");
const playerPc = document.querySelector("#player2");

document.addEventListener("DOMContentLoaded", init);

function init () {
rock.addEventListener("click", rock_pick);
paper.addEventListener("click", paper_pick);
scissor.addEventListener("click", scissor_pick);
}

function rock_pick() {
    console.log("ROCK");
    players.forEach(player => {
        player.classList.add("shake");
    });
setTimeout(() => {
        players.forEach(player => player.classList.remove("shake"));
    }, 1800);
}

function paper_pick() {
    console.log("PAPER");
    players.forEach(player => {
        player.classList.add("shake");
    });
    setTimeout(() => {
        players.forEach(player => player.classList.remove("shake"));
    }, 1800);
}

function scissor_pick() {
    console.log("SCISSOR");
    players.forEach(player => {
        player.classList.add("shake");
    });
    setTimeout(() => {
        players.forEach(player => player.classList.remove("shake"));
    }, 1800);
}

function randomPick() {
    const pc_pick = ["rock", "paper", "scissors"];
    return pc_pick[Math.floor(Math.random() * pc_pick.length)];
}