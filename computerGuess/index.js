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
    document.querySelector("#picture").innerHTML = '<img src="thinking_cat.jpg" alt=""></img>';

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
    document.querySelector("#picture").innerHTML = '<img src="happy_cat.jpg" alt=""></img>';
    e.preventDefault();
    min = 0;
    max = 100;
  });
});

 function guess() {
    number = Math.floor((min + max) / 2);
  document.querySelector(".computeranswer").textContent =
    "Jeg gætter på " + number;
  console.log("Computer gætter:", number);
 }