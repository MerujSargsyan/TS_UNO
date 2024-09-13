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