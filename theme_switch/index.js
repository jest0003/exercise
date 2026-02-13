console.log("navn på gemt tema", localStorage.getItem("mitTema"));

const dropdown = document.querySelector("#dropdown");
const body = document.querySelector("body");
const temaFraLS = localStorage.getItem("mitTema");

dropdown.addEventListener("click", pickTheme);

pickTheme (localStorage.getItem("mitTema"));

if (temaFraLS) {
    pickTheme (temaFraLS);
    dropdown.value =temaFraLS;
}
else {
    body.dataset.theme="light";
    dropdown.value = "light";
}

function pickTheme () {
    let valgtTema = body.dataset.theme=dropdown.value;

  /*  if (dropdown.value === "Light") {
       body.dataset.theme="light";
    console.log("light");}
    if (dropdown.value === "dark") {
        body.dataset.theme="dark";
        console.log("dark")
    }
    if (dropdown.value === "Purple") {
        body.dataset.theme="purple";
        console.log("purple");
    }*/

    localStorage.setItem("mitTema", valgtTema);
}