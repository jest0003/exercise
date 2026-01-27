"use strict"
//console.log("Hello");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissor = document.querySelector(".scissors");

document.addEventListener("DOMContentLoaded", init);

function init () {
rock.addEventListener("click", rock_pick);
paper.addEventListener("click", paper_pick);
scissor.addEventListener("click", scissor_pick);
}

function rock_pick() {
    console.log("ROCK");
}

function paper_pick() {
    console.log("PAPER");
}

function scissor_pick() {
    console.log("SCISSOR");
}
