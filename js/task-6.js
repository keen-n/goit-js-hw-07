function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('#controls input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', () => {
  const amount = inputNumber.value.trim();

  if (amount >= 1 && 1 <= 100) {
    createBoxes(amount);
    inputNumber.value = '';
  } else {
    alert('Enter a number in the range from 1 to 100');

  }
});

buttonDestroy.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++){
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '44px';
    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}



