"use strict";

function selectChange(evt) {
  console.log("evt target", evt.target);
}
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";

text[locale].texts.forEach((elm) => {
  console.log(elm.location);
  console.log(elm-text);
  document.querySelector(elm.location).textContent = elm.text;
});
