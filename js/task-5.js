const colorButton = document.querySelector("button.change-color");
const colorValue = document.querySelector("span.color");

colorButton.addEventListener("click", changeColor);

function changeColor() {
    const newColor = getRandomHexColor();
    colorValue.style.color = "#fff";
    colorValue.textContent = newColor;
    document.body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
