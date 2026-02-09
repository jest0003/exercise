const curseWords = [  {bad: "var", good: "const", },
    {bad: "float", good: "grid", },
    {bad: "marquee", good: "just don't", },];

const sfw_btn = document.querySelector("#sfw");
let isItClicked = false;
let theText = document.querySelector("p").textContent;

sfw_btn.addEventListener("click", klik);

function klik () {
    if (isItClicked) {
         console.log("KLIKKED");

    }
    else {
        console.log("ikke trykket")
        sfw();
    }
    isItClicked = true;
}

function sfw () {
    console.log("theText", theText);
    curseWords.forEach((word) => {
    console.log("Bad word", word.bad);
    console.log("Good word", word.good);
    });
}