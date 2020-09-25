
let size = 4
let backgroundColor = "#d8e2dc"
let rainbowMode = false;

const container = document.querySelector('#main-container');
const reset = document.querySelector('#reset');
const slider = document.querySelector("#slider-1");
const gridSize = document.querySelector('#grid-size');
const switch1 = document.querySelector('#switch-1');


function init() {
    // This creates (size * size) number of divs in the container and adds it to the DOM
    for (let i = 0; i < size * size; i++) {

        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.setAttribute('data-colored', 'false');
        div.style.cssText = `border-radius: ${calcBorderRadius(size)}px;
                             background-color: ${backgroundColor}`;

        div.addEventListener('mouseover', () => {
            // Only recolors a box if it was not already colored
            colored = (div.getAttribute('data-colored') == 'false') ? false : true;
            if(!colored){
                changeBackgroundColor(div.style);
                div.setAttribute('data-colored', 'true');
            }
        });
        container.appendChild(div);
    }
    // Sets the grid size in CSS
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`;
    
}

function calcBorderRadius(size) {
    return parseFloat((-10 / 70) * size + 11, 85).toFixed(2);
}

function clear() {
    const nodes = container.childNodes
    nodes.forEach(node => {
        node.style.backgroundColor = backgroundColor;
        node.setAttribute('data-colored', 'false');
    });
}

function resize(gridSize){
    size = gridSize;
    console.log(gridSize)
    while(container.firstChild){
        container.removeChild(container.lastElementChild);
    }
    init();
}

/**
 * For input you have to pass a stlye,
 * and it replaces the backgound color of it depending on the rainbow mode.
 * @param {CSSStyleDeclaration} style 
 */
function changeBackgroundColor(style){
    parseFloat().toFixed();
    if(rainbowMode){
        style.cssText += `background-color: rgb(
        ${parseFloat(Math.random() * 255).toFixed()}
        ${parseFloat(Math.random() * 255).toFixed()} 
        ${parseFloat(Math.random() * 255).toFixed()})`;
    }
    else{
        style.cssText += 'background-color: #f4acb7';
    }
};

reset.addEventListener('click', clear);
slider.addEventListener('input', () => {resize(slider.value)});
switch1.addEventListener('input', ()=>{
    rainbowMode = rainbowMode ? false : true;
})

init();








