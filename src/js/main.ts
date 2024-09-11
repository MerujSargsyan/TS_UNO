import Card from "./library";

const card: Card = new Card(0, "blue");
const img : HTMLImageElement = document.createElement("img"); 

img.src = card.src;