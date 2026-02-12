addEventListener("mousemove", movement);

function movement (e) {
    console.log ("Movement happening");
    const procent = e.clientX / window.innerWidth;
    const hue = procent * 360;

    document.body.style.backgroundColor =
    `hsl(${hue}, 100%, 50%)` //100% hvor kraftig farven er, 50% er hvor lys den er
}