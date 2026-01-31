const tooHigh = document.querySelector(".toohigh");
const tooLow = document.querySelector(".toolow");
const youWon = document.querySelector(".winner");
const startGame = document.querySelector(".startgame");
let min = 0;
let max = 100;
let number;

startGame.addEventListener("click", function () {
  number = Math.floor((min + max) / 2);
  document.querySelector(".computeranswer").innerHTML =
    "Jeg gætter på " + number;

  tooHigh.addEventListener("click", (e) => {
    max = number;
    guess();
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";
    e.preventDefault();
  });

  tooLow.addEventListener("click", (e) => {
    min = number;
    guess();
    console.log(" tal:", number);
    document.querySelector(".computeranswer").innerHTML =
      "Er det " + number + "?";
    e.preventDefault();
  });

  youWon.addEventListener("click", (e) => {
    document.querySelector(".computeranswer").innerHTML = "Du vandt!";
    e.preventDefault();
  });
});

 function guess() {
    number = Math.floor((min + max) / 2);
  document.querySelector(".computeranswer").textContent =
    "Jeg gætter på " + number;
  console.log("Computer gætter:", number);
 }

// computer vandt, men skal gætte igen
youWon.addEventListener("click", youWon);