document.addEventListener('DOMContentLoaded', function () {
    createElementsInHeader();
    createGridShell(95);
})const addingInput = document.getElementById("addingInput");
const addUpButton = document.getElementById("addUpToButtonColor");
let previousMatchedDivs = [];
let inputValue = null;

function findAddedUpCells() {
    const numDivsAvailableCurrently = document.querySelectorAll(".gridCells");//nodeList
    console.log(numDivsAvailableCurrently);

    if (inputValue !== null) {
        const inputSum = inputValue;
        let foundMatchesForInput = false;

        if (previousMatchedDivs.length > 0) {
            previousMatchedDivs.forEach((matchedDiv) => {
                matchedDiv.classList.replace("addedUpDivsColor", "gridCellsColor");
            })
        }

        for (let i = 0; i < numDivsAvailableCurrently.length; i++) {
            console.log(numDivsAvailableCurrently[i], "Div i");
            let divA = Number(numDivsAvailableCurrently[i].textContent);
            console.log(divA);

            for (let j = 0; j < numDivsAvailableCurrently.length; j++) {
                console.log(numDivsAvailableCurrently[j], "Div j");
                let divB = Number(numDivsAvailableCurrently[j].textContent);
                console.log(divB);

                if (i === j) continue;

                if ((divA + divB) === inputSum) {
                    let currentMatchedDivs = [];
                    let firstMatchedDiv = numDivsAvailableCurrently[i];
                    let secondMatchedDiv = numDivsAvailableCurrently[j];

                    currentMatchedDivs.push(firstMatchedDiv, secondMatchedDiv);
                    console.log(currentMatchedDivs, "Detta är en array med matchade divar");

                    console.log(`${divA} plus ${divB} blir ${inputSum}`);
                    firstMatchedDiv.classList.replace("gridCellsColor", "addedUpDivsColor");
                    secondMatchedDiv.classList.replace("gridCellsColor", "addedUpDivsColor");

                    foundMatchesForInput = true;
                    previousMatchedDivs = currentMatchedDivs;
                    break;
                }
            }
            if (foundMatchesForInput) break;
        }
    }
}

addingInput.addEventListener("blur", function (e) {
    const inputContent = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
        inputValue = inputContent;
        console.log(inputValue, "Detta är värdet från input och är en siffra");
    }
})

addUpButton.addEventListener("click", function () {
    console.log("AddUpButton klickades på");
    findAddedUpCells();
})



