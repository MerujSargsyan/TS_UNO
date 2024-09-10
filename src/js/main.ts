const CARD_HEIGHT = 100;
const CARD_WIDTH = 50;

const canvas : HTMLCanvasElement | null = document.getElementById("game") as HTMLCanvasElement;
const ctx : CanvasRenderingContext2D | null = canvas?.getContext("2d");

const img : HTMLImageElement = new Image(CARD_WIDTH, CARD_HEIGHT);
img.src = "../resources/blue_0.png";
ctx?.drawImage(img, 0, 0);
