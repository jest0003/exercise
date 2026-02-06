const navn = "peter heronimous lind";
const dele = navn.split(" ");

//const fornavn = navn.substring(0, 5);
//const mellemnavn = navn.substring(6, 16)
//const efternavn = navn.substring(17)

let korrektNavn = "";
korrektNavn += dele[0][0].toUpperCase() + dele[0].substring(1).toLowerCase() + " ";

korrektNavn+= dele[1][0].toUpperCase() + dele[1].substring(1).toLowerCase() +" ";

korrektNavn+= dele[2][0].toUpperCase() +  dele[2].substring(1).toLowerCase();

console.log(korrektNavn)

//console.log ("navn", navn[0].toUpperCase(), navn.toLowerCase());
//console.log ("fornavn", fornavn.toLowerCase());
//console.log ("mellemnavn", mellemnavn);
//console.log ("efternavn", efternavn);