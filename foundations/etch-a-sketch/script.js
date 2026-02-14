function addHoverClass(e) {
    const item = e.target;
    item.classList.add("hover");
}

function createGrid(size) {
    let container = document.querySelector(".container");
    container.remove();

    container = document.createElement("div");
    container.classList.add("container");
    document.querySelector("body").appendChild(container);

    for (let i = 0; i < size * size; i++) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.style.setProperty("height", 800 / size - 2 + "px");
        item.style.setProperty("width", 800 / size - 2 + "px");
        item.addEventListener('mouseenter', addHoverClass);
        container.appendChild(item);
    }   
}

createGrid(4);
const dimButton = document.querySelector("#dimension");
dimButton.addEventListener('click', () => { createGrid(Number.parseInt(prompt("Grid size:"))) })