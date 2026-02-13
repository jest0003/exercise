const no = document.querySelector("#number");
const artist = document.querySelector("#artist");
update ();
function update () {
fetch ("https://kea-alt-del.dk/kata-distortion/")
.then(response => response.json()) //response er selvvalgt navn her
.then(data => {
    console.log(data);

    no.textContent =data.inQueue;
    artist.textContent = data.name;
})
}
setInterval(update, 10000)

//voluome knap