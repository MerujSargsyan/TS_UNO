import Card from "./library.js";
import { values, colors } from "./library.js";

const botArea : HTMLDivElement = document.getElementById("bot-area") as HTMLDivElement;
const playerArea : HTMLDivElement = document.getElementById("player-area") as HTMLDivElement;

const deck : Card[] = [];


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

const deal = () => {
    for(let i = 0; i < 7; i++) {
        const c : Card | undefined= deck.pop();
        const img : HTMLImageElement = document.createElement("img");
        img.src = c ? c.src : "";
        botArea.appendChild(img);
    }
    for(let i = 0; i < 7; i++) {
        const c : Card | undefined= deck.pop();
        const img : HTMLImageElement = document.createElement("img");
        img.src = c ? c.src : "";
        playerArea.appendChild(img);
    }
}

deal();