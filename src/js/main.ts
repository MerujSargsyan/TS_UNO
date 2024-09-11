import Card from "./library.js";

const body : HTMLBodyElement = (document.getElementsByTagName("body"))[0];

let card = new Card(0, "blue");
let img : HTMLImageElement = document.createElement("img"); 

img.src = card.src;
body.appendChild(img);