const curseWords = [  {bad: "var", good: "const", },
    {bad: "float", good: "grid", },
    {bad: "marquee", good: "just don't", },];

const sfw_btn = document.querySelector("#sfw");
let isItClicked = false;
const p = document.querySelector("p");

sfw_btn.addEventListener("click", klik);

function klik () {
    if (isItClicked) {
         console.log("KLIKKED");
         alert("Dette er allerede SFW");

    }
    else {
        console.log("ikke trykket")
        sfw();
    }
    isItClicked = true;
}

function sfw () {
    let theText = p.textContent;
    curseWords.forEach((word) => {
      theText = theText.replaceAll(word.bad, word.good);
    });
    p.textContent = theText;
}