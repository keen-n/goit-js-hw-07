function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorSpan = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');


buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpan.innerHTML = randomColor;
})
