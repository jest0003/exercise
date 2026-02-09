const dropdown = document.querySelector("#dropdown");
const body = document.querySelector("body");

dropdown.addEventListener("click", pickTheme);

function pickTheme () {
    if (dropdown.value === "Light") {
       body.dataset.theme="light";
    console.log("light");}
    if (dropdown.value === "Dark") {
        body.dataset.theme="dark";
        console.log("dark")
    }
    if (dropdown.value === "Purple") {
        body.dataset.theme="purple";
        console.log("purple");
    }
}