const toggle = document.querySelector('#container');

const circle = document.querySelector('#circle');
let hadClicked = false;

toggle.addEventListener('click', () => {
    circle.classList.toggle('active');
    const body = document.querySelector('body');
    body.style.color = "white";
    body.style.background = "black"; 
    if (hadClicked) {
        body.style.color = "black";
        body.style.background = "white";
    }
    hadClicked = !hadClicked;
});






