const randomNumberButton = document.getElementById("randomButton");
const pRandom = document.getElementById("pRandom");
const eraseButton = document.getElementById("eraseButton");
const pRemove = document.getElementById("pRemove");

function findRandomNumberInGrid() {

    const currentCellsInGrid = document.querySelectorAll(".gridCells");
    console.log(currentCellsInGrid, "nodelist av cellerna");
    const randomNumber = createRandomNumber();
    console.log("Random number to match", randomNumber);
    pRandom.textContent = randomNumber;

    let matchFound = false;
    let matchCounter = 0;

    for (let cell of currentCellsInGrid) {
        if (Number(cell.textContent) == randomNumber) {
            console.log("Match!");
            matchFound = true;
            matchCounter += 1;
            cell.classList.remove("gridCellsColor");
            cell.classList.add("newColorForMatch");

            eraseButton.addEventListener("click", function () {
                cell.textContent = "X";
                cell.classList.remove("newColorForMatch");
                cell.classList.add("newColorForRemove");
                pRemove.textContent = `${randomNumber} removed ${matchCounter} times`;
            })
        } else {
            console.log("No match!");
        }
    }

    eraseButton.addEventListener("click", function () {
        if (!matchFound) {
            pRemove.textContent = "Nothing to remove";
        }
    })
}


randomNumberButton.addEventListener("click", function () {
    findRandomNumberInGrid();
})

