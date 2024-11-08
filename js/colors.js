const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');

const colors = ["orange", "red", "violet", "black", "green", "pink"]

myButton.addEventListener('click', changeColor);

function changeColor() {

    let randomIndex = Math.floor(Math.random() * colors.length)
    myBox.style.backgroundColor = colors [randomIndex];
    /* console.log(randomIndex); */
}