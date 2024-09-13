import Card from "./library.js";

const botArea : HTMLDivElement = document.getElementById("bot-area") as HTMLDivElement;
const playerArea : HTMLDivElement = document.getElementById("player-area") as HTMLDivElement;

const deck : Card[] = [];

const values : string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
    "skip", "picker"];
const colors : string[] = ["red", "yellow", "green", "blue"];

for(let i = 0; i < 2; i++) {
    for(let val of values) {
        for (let col of colors) {
            deck.push(new Card(val, col));
        }
    }

    deck.push(new Card("wild", "black"));
    deck.push(new Card("wild", "black"));
    deck.push(new Card("draw4", "black"));
    deck.push(new Card("draw4", "black"));
}

deck.forEach((card) => {
    const cardImg : HTMLImageElement = document.createElement("img"); 
    cardImg.src = card.src;
    botArea.appendChild(cardImg);
});