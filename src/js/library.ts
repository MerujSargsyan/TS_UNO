export default class Card {
    value: number;
    color: string;
    src: string;
    constructor(value, color : string) {
        this.value = value;
        this.color = color;
        this.src = `../resources/cards/${color}_${value}`;
    }
}