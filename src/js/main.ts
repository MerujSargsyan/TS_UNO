const button : HTMLElement | null = document.getElementById("button");

button?.addEventListener(("click"), () => {
    console.log("clicked");
});