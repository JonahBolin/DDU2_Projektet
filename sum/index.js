document.addEventListener('DOMContentLoaded', function () {
    createElementsInHeader();
    createGridShell(95);

let pSumOfAll = document.querySelector(".pInsideContainer");
let pSumOfMarked = document.getElementById("pSumOfMarked");
console.log(pSumOfMarked);

let ButtonCreate = document.querySelector(".buttonCreate");
console.log(ButtonCreate);

let resetButton = document.getElementById("resetButton");

function sumAllCurrentCells() {
    const allCurrentCells = document.querySelectorAll(".gridCells");
    let sumOfAll = 0;
    const allCurrentCells = document.querySelectorAll(".gridCells"); //nodelist 
    console.log(allCurrentCells);

    for (let cell of allCurrentCells) {
        console.log(cell.textContent);
        sumOfAll += Number(cell.textContent);
        console.log(sumOfAll);
    }
    return sumOfAll;
}


//pSumOfMarked.textContent = "";
// event på create-knappen med ett funktionsanrop till sumAllCurrentCells 
ButtonCreate.addEventListener("click", function () {
    pSumOfAll.textContent = "";
    pSumOfAll.textContent = sumAllCurrentCells();


})

})

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.body.innerHTML); // Visar hela body-strukturen
});

