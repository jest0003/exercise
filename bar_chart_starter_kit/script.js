
const list = document.querySelector("ul");

const columnArray = [];

setInterval(generateColumns, 1000);

function generateColumns () {
    const solje =Math.round(Math.random()* 100);
    columnArray.push(solje);
   console.log ("columnArray", columnArray);
   let li = document.createElement("li");
   li.style.setProperty("--height", solje);
   list.appendChild(li);
   if (columnArray.length > 20) {
    columnArray.shift();
    list.firstElementChild.remove();
   }
}