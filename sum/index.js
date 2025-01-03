document.addEventListener('DOMContentLoaded', function () {
    createElementsInHeader();
    createGridShell(95);
let ButtonCreate = document.querySelector(".buttonCreate");
console.log(ButtonCreate);

function sumAllCurrentCells() {
    const allCurrentCells = document.querySelectorAll(".gridCells");
    console.log(allCurrentCells);
}






// anrop
ButtonCreate.addEventListener("click", function () {
    sumAllCurrentCells();
})

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.body.innerHTML); // Visar hela body-strukturen
});

