addEventListener("animationend", skiftBaggrundsfarve);
addEventListener("mousemove", stopsbf);

function skiftBaggrundsfarve () {
    document.querySelector("section").style.backgroundColor ="rgb(185, 95, 249)";
    if (stopsbf()) {
        return;
    }
}

function stopsbf() {
    document.querySelector("button").classList.add("slut");
}