
const display = window.screen.width;

const receive1 = document.querySelector('#receive1');
const receive2 = document.querySelector('#receive2');


const createEl = (element, obj) => {
    const el = document.createElement(element);
    const arrayOfProperty = Object.entries(obj);
    arrayOfProperty.forEach(([key, value]) => el.setAttribute(key, value));
    return el;
}



if (display <= 800) {
    const img1 = createEl('img', { src:"./img/objects/cha-panela-02.jpeg", alt:"decoração cha de panela" });
    const img2 = createEl('img', { src:"./img/animals/shark.png", alt:"tubarão esculpido em isopor e fibras" })

    receive1.appendChild(img1);
    receive2.appendChild(img2);
}


