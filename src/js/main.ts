import Card from "./library.js";

const botArea : HTMLDivElement = document.getElementById("bot-area") as HTMLDivElement;
const playerArea : HTMLDivElement = document.getElementById("player-area") as HTMLDivElement;

let card = new Card(0, "yellow");
let img : HTMLImageElement = document.createElement("img"); 
let img2 : HTMLImageElement = document.createElement("img"); 

img.src = card.src;
img2.src = card.src;
botArea.appendChild(img);
playerArea.appendChild(img2);