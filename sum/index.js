document.addEventListener('DOMContentLoaded', function () {
    createElementsInHeader();
    createGridShell(95);

let pSumOfAll = document.querySelector(".pInsideContainer");
let pSumOfAll = document.getElementById("pSumOfAll");
let pSumOfMarked = document.getElementById("pSumOfMarked");
console.log(pSumOfMarked);

let ButtonCreate = document.querySelector(".buttonCreate");
console.log(ButtonCreate);

let resetButton = document.getElementById("resetButton");
let resetButton = document.getElementById("resetButtonColor");

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

function sumMarkedDivsAndChangeTheirColor() {
ButtonCreate.addEventListener("click", function () {
    let listOfNumDivs = document.querySelectorAll(".gridCells");
    sendMarkedDivs(listOfNumDivs);

    pSumOfAll.textContent = "";
    pSumOfAll.textContent = sumAllCurrentCells();
})

function sendMarkedDivs(numDivsCreated) {
    let clickedDivs = [];
    let sumOfMarked = 0;
    let listOfNumDivs = document.querySelectorAll(".gridCells");
    for (let numDiv of listOfNumDivs) {
        console.log(numDiv, "en cell");

    numDivsCreated.forEach((numDiv) => {

        if (sumOfMarked === 0) {
            console.log(sumOfMarked);

            pSumOfMarked.textContent = "-";
            pSumOfMarkedMessage(pSumOfMarked.textContent);
        }
        numDiv.addEventListener("click", function () {
            console.log("en cell klickades på");
            numDiv.classList.remove("gridCellsColor");
            numDiv.classList.add("cellEventColor");

            numDiv.classList.replace("gridCellsColor", "cellEventColor");
            sumOfMarked += Number(numDiv.textContent);
            console.log(sumOfMarked);
            clickedDivs.push(numDiv);

            pSumOfMarked.textContent = sumOfMarked;

            resetButton.addEventListener("click", function () {
                pSumOfMarked.textContent = "-";
                sumOfMarked = 0;
                if (clickedDivs.length > 0) {
                    console.log(clickedDivs, "arrayen som innehåller klickade divar som ska rensas");
                    clickedDivs.forEach((div) => {
                        div.classList.replace("cellEventColor", "gridCellsColor");
                    })
                }
            })
        })
    }
    })
}

//pSumOfMarked.textContent = "";
// event på create-knappen med ett funktionsanrop till sumAllCurrentCells 
ButtonCreate.addEventListener("click", function () {
    pSumOfAll.textContent = "";
    pSumOfAll.textContent = sumAllCurrentCells();

    pSumOfMarked.textContent = sumMarkedDivsAndChangeTheirColor();
function pSumOfMarkedMessage(message) {
    pSumOfMarked.textContent = message;
    console.log(pSumOfMarked.textContent);
}

})

resetButton.addEventListener("click", function () {
    pSumOfMarked.textContent = "-";
})

document.addEventListener("DOMContentLoaded", () => {
    console.log(document.body.innerHTML); // Visar hela body-strukturen
});

// För att summera måste vi ha:
// 1. En variabel på vilken summan ska sparas. Denna tilldelas värdet 0 från start
// 2. En loop som går igenom varje node i allCurrentCells och tar en div i taget, kollar 
// dess textContent och omvandlar det till en siffra (eftersom det är en sträng) och sen 
// ska siffran tilldelas till variabeln. Detta ska göras tills loopen har gått igenom alla divar
// 3. När variabeln är "full" så ska den placeras i <p class="pInsideContainer"></p>, med
// textContent förslagsvis 
// Allt detta måste ske inom samma "runda" så att summan gäller för de divar som finns på sidan
// Därför kan <p class="pInsideContainer"></p> behöva tömmas innan den ska fyllas igen med en ny summa

// För att ändra färg på de celler som markeras så ska 
// 1. ett event ske på cellen med "klick"
// 2. klassen gridCellsColor ska tas bort
// 3. klassen cellEventColor ska läggas till

// För att ta bort divarna från sidan vid klick på reset-knappen 
// 1. Ha ett event på reset
// 2. Sätta <p class="pInsideContainer">-</p>.textContent = "-"


