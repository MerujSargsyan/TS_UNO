export default class Card {
    value: string;
    color: string;
    src: string;
    constructor(value : string, color : string) {
        this.value = value;
        this.color = color;
        this.src = `../resources/cards/${color}_${value}.png`;
    }
}

export const values : string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
    "skip", "picker"];
export const colors : string[] = ["red", "yellow", "green", "blue"];
