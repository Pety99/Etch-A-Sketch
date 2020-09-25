
let size = 4
let backgroundColor = "#123456"

const container = document.querySelector('#main-container');
const reset = document.querySelector('#reset');
const slider = document.querySelector(".slider");
const gridSize = document.querySelector('#grid-size');

function init() {
    // This creates (size * size) number of divs in the container and adds it to the DOM
    for (let i = 0; i < size * size; i++) {

        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.cssText = `border-radius: ${calcBorderRadius(size)}px;
                             background-color: ${backgroundColor}`;

        div.addEventListener('mouseover', () => {
            div.style.cssText += "background-color: black";
        });
        container.appendChild(div);
    }
    // Sets the grid size in CSS
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;
    
    gridSize.textContent = `Grid size: ${size}`;
}

function calcBorderRadius(size) {
    return parseFloat((-10 / 70) * size + 11, 85).toFixed(2);
}

function clear() {
    const nodes = container.childNodes
    nodes.forEach(node => {
        node.style.backgroundColor = backgroundColor;
    });
}

function resize(gridSize){
    size = gridSize;
    while(container.firstChild){
        container.removeChild(container.lastElementChild);
    }
    init();
}

reset.addEventListener('click', clear);
slider.addEventListener('input', () => {resize(slider.value)});
init();










