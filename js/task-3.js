const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', e => {
    const value = nameInput.value.trim();

    e.target.innerHTML = value === '' ? "Anonymous" : value;
})