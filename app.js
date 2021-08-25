const nameElement = document.getElementById('name');

const updateButton = document.getElementById('update-button');

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {

    const name = nameInput.value;

    nameElement.textContent = name;

});

const pronounsElement = document.getElementById('pronouns');

const updateButtonP = document.getElementById('update-button-p');

const pronounsInput = document.getElementById('pronouns-input');

updateButtonP.addEventListener('click', () => {

    const pronouns = pronounsInput.value;

    pronounsElement.textContent = pronouns;

});

