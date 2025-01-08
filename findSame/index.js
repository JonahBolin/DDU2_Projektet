const createNumDivsButton = document.querySelector(".buttonCreate");
const paragraph = document.getElementById("copyMessage");
const resetButton = document.getElementById("findSameButton");
let previousTargetedDivs = [];

createNumDivsButton.addEventListener("click", function () {
    const listOfGridDivs = document.querySelectorAll(".gridCells");
    console.log(listOfGridDivs, "alla skapade divar");

    listOfGridDivs.forEach((div) => {
        div.addEventListener("click", function () {
            let copiesCounter = 0;
            let currentTargetedDivs = [];
            let clickedDiv = div;
            currentTargetedDivs.push(clickedDiv);
            console.log(currentTargetedDivs, "Denna array innehåller den klickade diven");

            let clickedDivsNumber = Number(div.textContent);
            console.log(clickedDivsNumber, "den klickade divens nummer");

            div.classList.replace("gridCellsColor", "targetedDivsColor");

            if (previousTargetedDivs.length > 0) {
                console.log(previousTargetedDivs, "Dessa divar var förra omgångens targets");
                previousTargetedDivs.forEach((prevDiv) => {
                    prevDiv.classList.replace("targetedDivsColor", "gridCellsColor");
                })
            }

            for (let numDiv of listOfGridDivs) {
                console.log(numDiv, "En cell");
                if (clickedDivsNumber == Number(numDiv.textContent)) {
                    let matchedNumDiv = numDiv;
                    console.log(matchedNumDiv, "En matchning");
                    copiesCounter += 1;
                    paragraph.textContent = `${copiesCounter} copies of the number ${clickedDivsNumber}`;

                    matchedNumDiv.classList.replace("gridCellsColor", "targetedDivsColor");
                    currentTargetedDivs.push(matchedNumDiv);
                }
                resetButton.addEventListener("click", function () {
                    div.classList.replace("targetedDivsColor", "gridCellsColor");
                    numDiv.classList.replace("targetedDivsColor", "gridCellsColor");
                    paragraph.textContent = `Click on a number to find copies`;
                })
            }
            previousTargetedDivs = currentTargetedDivs;
        })
    })
})



