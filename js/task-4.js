const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const login = email.value.trim();
    const passwordValue = password.value.trim();

    if (!isValidinput(login, passwordValue)) {
        return displayError("All form fields must be filled in");
    }

    showUserData(login, passwordValue);
    event.target.reset();
}

function showUserData(email, password) {
    const userData = { email, password };
    console.log(userData);
}

function isValidinput(email, password) {
    return email !== "" && password !== "";
}

function displayError(message) {
    alert(message);
}
