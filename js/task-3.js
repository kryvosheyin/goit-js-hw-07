const nameField = document.getElementById("name-input");

const nameOutput = document.getElementById("name-output");

nameField.addEventListener("input", (event) => {
    if (nameField.value.trim() !== "") {
        return (nameOutput.textContent = event.currentTarget.value);
    }
    return (nameOutput.textContent = "Anonymous");
});
