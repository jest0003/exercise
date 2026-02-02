const no_1 = document.querySelector("#no_1");
const no_2 = document.querySelector("#no_2");
const resultat = document.querySelector("#resultat");
const beregn = document.querySelector ("#beregn");

const tegn = document.querySelector("#mat_tegn");
beregn.addEventListener("click", udregning);

function udregning () {
    let no_1_value_num =parseInt(no_1.value) 
    let no_2_value_num =parseInt(no_2.value)
    if (tegn.value === "plus") {
          resultat.innerHTML =
        no_1_value_num + no_2_value_num
        console.log ("resultat plus", no_1_value_num+no_2_value_num)
    }
    if (tegn.value === "minus") {
          resultat.innerHTML =
        no_1_value_num - no_2_value_num
        console.log ("resultat minus", no_1_value_num-no_2_value_num)
    }
    if (tegn.value === "gange") {
          resultat.innerHTML =
        no_1_value_num * no_2_value_num
        console.log ("resultat gange", no_1_value_num * no_2_value_num)
    }
    if (tegn.value === "divider") {
          resultat.innerHTML =
        no_1_value_num / no_2_value_num
        console.log("resultat divider", no_1_value_num / no_2_value_num)
    }
}