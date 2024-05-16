function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    destroyBoxes();

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement("div");
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(div);
    }

    boxes.appendChild(fragment);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

const numberOfBoxesInput = document.querySelector('[type="number"]');
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

const boxes = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
    const amount = Number.parseInt(numberOfBoxesInput.value, 10);

    if (amount <= 0 || amount > 100) {
        return alert("Please enter a number between 1 and 100");
    }

    createBoxes(amount);

    numberOfBoxesInput.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
