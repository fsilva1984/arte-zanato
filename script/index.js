// Toggle grid padding
function myFunction() {
    var x = document.getElementById("myGrid");
    if (x.className === "w3-row") {
        x.className = "w3-row-padding";
    } else {
        x.className = x.className.replace("w3-row-padding", "w3-row");
    }
}
// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

const horse = document.querySelector('.horse');
const burger = document.querySelector('.burger');
const drink = document.querySelector('.drink');
const candy = document.querySelector('.candy');

const height = window.screen.height;
const width = window.screen.width;

if (width < 600) {
    horse.setAttribute('src', 'img/animals/horse-552.png');
    burger.setAttribute('src', 'img/hamburger/burger-552.png');
    drink.setAttribute('src', 'img/drinks/drink-552.png');
    candy.setAttribute('src', 'img/candy/candy-552.png');
}