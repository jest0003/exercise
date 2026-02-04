const el_btn = document.querySelector("#el_btn");
const twoSeats = document.querySelector("#more_than_2");
const jonasEl = document.querySelector("#jonas_el");
const ryebread = document.querySelector("#rugbrodsmotor");
const no_filter = document.querySelector("#no_filter");

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function boolToIcon(value) {
  if (value === true) {
    return "✔"; // U+2714
  } if (value == undefined) {
    return "✖"; // U+2716
  }
  return value;
}

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${boolToIcon(each.stops)}</td>
  <td>${each.ownedBy}</td>
  <td>${boolToIcon(each.isElectric)}</td>
  <td>${boolToIcon(each.isTandem)}</td>
</tr>`;
  });
}
no_filter.addEventListener("click", showTheseVehiclesReset)
function showTheseVehiclesReset() {
  tbodyPointer.innerHTML= "";
  showTheseVehicles(vehicles);
}

el_btn.addEventListener("click", visElKoretoj);

function visElKoretoj() {
  const elKoretoj = vehicles.filter((vehicle) => {
    return vehicle.isElectric === true;
  });
  tbodyPointer.innerHTML = "";
  showTheseVehicles(elKoretoj);
}

twoSeats.addEventListener("click", showTwoOrMoreSeats);

function showTwoOrMoreSeats() {
  const twoOrMore = vehicles.filter((vehicle) => {
    return vehicle.passengers > 1;
  });
  tbodyPointer.innerHTML = "";
  showTheseVehicles(twoOrMore)
}

jonasEl.addEventListener("click", visJonas);

function visJonas () {
  const jonasEgndom = vehicles.filter((vehicle) => {
    return vehicle.ownedBy === "Jonas" && vehicle.isElectric === true;
  });
  tbodyPointer.innerHTML = "";
  showTheseVehicles(jonasEgndom)
}

ryebread.addEventListener("click", showRyebread);

function showRyebread() {
  const secondRyebread = vehicles.filter((vehicle) => {
    return vehicle.fuel === "Rugbrød" && vehicle.passengers > 1;
  });
  tbodyPointer.innerHTML= "";
  showTheseVehicles(secondRyebread)
}