const display = document.querySelector(".display");
// fanger alle kanapperne der kan trykkes på og sætter en klik event på dem(dem der ikke er disabled i HTML)
document.querySelectorAll(".key").forEach((elm) => {
  elm.addEventListener("click", klik);
});
let displayContent = "";
let typeOfInput = "";

let firstNumVal = "";
let secondNumVal = "";
let regneArt = "";

function klik(evt) {
  const btnClicked = evt.target.dataset.func;
  
  updateScreen(btnClicked);
  // hvilken salgs input er det: "num" "regneart" "ligmed" "CLEAR"

  typeOfInput = whatTypeOfInput(btnClicked);


  console.log("typeOfInput:", typeOfInput);
  
  if (typeOfInput === "num") {
   if (regneArt === "") {
    firstNumVal += btnClicked;
    console.log("firstNumVal", firstNumVal)
   }
   else {
    secondNumVal += btnClicked;
    console.log ("secondNumVal", secondNumVal)
   }
  } else if (typeOfInput === "regneart") {
    if (firstNumVal !== "" && regneArt === "") {
      regneArt = btnClicked;
      console.log("regneArt:", regneArt)
    }
  } else if (typeOfInput === "ligmed") {
    const no_1 =parseInt(firstNumVal);
    const no_2 =parseInt(secondNumVal);
    let result;

    if (regneArt === "+") {
      result = no_1 + no_2;
    }
    if (regneArt=== "-") {
      result = no_1 -no_2;
    }
    if (regneArt=== "/") {
      result = no_1 / no_2;
    }
    if (regneArt=== "*") {
      result = no_1 * no_2;
    }

    updateScreen("" + result.toString());
    
  } else if (typeOfInput === "CLEAR") {

    resetScreen();
  }
}

function whatTypeOfInput(btnClicked) {
  if (
    btnClicked === "0" ||
    btnClicked === "1" ||
    btnClicked === "2" ||
    btnClicked === "3" ||
    btnClicked === "4" ||
    btnClicked === "5" ||
    btnClicked === "6" ||
    btnClicked === "7" ||
    btnClicked === "8" ||
    btnClicked === "9"
  ) {
    return "num";
  } else if (btnClicked === "+" || btnClicked === "/" || btnClicked === "*" || btnClicked === "-") {
    return "regneart";
  } else if (btnClicked === "=") {
    return "ligmed";
  } else if (btnClicked === "ac") {
    return "CLEAR";
  }
}

function updateScreen(chars) {
  displayContent += chars;
  display.value = displayContent;
}
function resetScreen() {
  firstNumVal = "";
  secondNumVal = "";
  regneArt = "";
  displayContent = "";
  display.value = "0";
}
