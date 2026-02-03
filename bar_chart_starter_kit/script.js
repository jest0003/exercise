
const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

const columnArray = [];

setInterval(generateColumns, 1000);

function generateColumns () {
    columnArray.push(Math.round(Math.random()* 100));
   console.log ("columnArray", columnArray);
   if (columnArray.length > 20) {
    columnArray.shift()
   }
}

//length for længde
//shift til start af array