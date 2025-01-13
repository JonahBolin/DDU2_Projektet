document.addEventListener('DOMContentLoaded', function () {
    createElementsInHeader();
    createGridShell(95);
})const createDivsButton = document.querySelector(".buttonCreate");
const clearButton = document.getElementById("clearButton");
let currentFilledDivs = [];
let previousFilledDivs = [];
let divHasAFillChange = false;


function collectDivs() {
    const numDivs = document.querySelectorAll(".gridCells");

    numDivs.forEach((div) => {
        startRoundForDivChanges(div);
    });
}

function startRoundForDivChanges(div) {

    div.dataset.phase = "idle";
    console.log(`${div.dataset.phase}, diven har inte utsatts för något event ännu`);
    div.dataset.cycle = "1";

    div.addEventListener("mouseenter", function () {
        console.log(div.textContent, "diven som behandlas nu");
        mouseEnter(div);
    });
    div.addEventListener("click", function () {
        mouseClick(div);
    });
    div.addEventListener("mouseleave", function () {
        mouseLeave(div)
    });
}

function mouseEnter(div) {
    if (div.dataset.phase === "idle" || div.dataset.phase === "mouseleave") {

        let cycle = div.dataset.cycle;

        if (cycle === "1") {
            div.classList.replace("gridCellsColor", "mouseoverColor"); //gul
            console.log(cycle, "denna cykeln är vi på nu");
        } else if (cycle === "2") {
            console.log(cycle, "denna cykeln är vi på nu");
            div.classList.replace("mouseleaveColor", "clickColor"); //guld
        }

        div.dataset.phase = "mouseenter";
        console.log(`mouseenter är triggad, fasen = ${div.dataset.phase}`);

        storeNewFilledDivs(div);
    }
}

function mouseClick(div) {
    if (div.dataset.phase === "mouseenter") {

        let cycle = div.dataset.cycle;

        if (cycle === "1") {
            div.classList.replace("mouseoverColor", "clickColor"); //guld
            div.textContent = "";
            console.log(cycle, "denna cykeln är vi på nu");
        } else if (cycle === "2") {
            div.classList.replace("clickColor", "mouseoverColor"); //gul
            if (!div.classList.contains("gridCellsColor")) {
                div.textContent = createRandomNumber();
                console.log(cycle, "denna cykeln är vi på nu");
            }

        }
        div.dataset.phase = "click";
        console.log(`click är triggad, fasen = ${div.dataset.phase}`);

        storeNewFilledDivs(div);
    }
}

function mouseLeave(div) {
    if (div.dataset.phase === "click") {

        let cycle = div.dataset.cycle;

        if (cycle === "1") {
            div.classList.replace("clickColor", "mouseleaveColor");
            div.dataset.cycle = "2";
            console.log(cycle, "denna cykeln är vi på nu");
        } else if (cycle === "2") {
            div.classList.replace("mouseoverColor", "gridCellsColor");
            div.dataset.cycle = "1";
            console.log(cycle, "denna cykeln är vi på nu");
        }
        div.dataset.phase = "mouseleave";
        console.log(`mouseleave är triggad, fasen = ${div.dataset.phase}`);

        storeNewFilledDivs(div);
    }
}

function storeNewFilledDivs(div) {
    if (!currentFilledDivs.includes(div)) {
        currentFilledDivs.push(div);
        console.log(currentFilledDivs, "array med divar som inte förekommit tidigare");
    }
}


function resetArrays(currentArray) {
    previousFilledDivs = currentArray
    currentArray = [];
    console.log(currentArray);
}

function clearFilledDivs() {
    console.log(currentFilledDivs);
    if (currentFilledDivs.length > 0) {
        currentFilledDivs.forEach((filledDiv) => {
            if (!filledDiv.classList.contains("gridCellsColor")) {
                if (filledDiv.classList.contains("mouseoverColor", "clickColor", "mouseleaveColor")); {
                    filledDiv.textContent = createRandomNumber();
                    filledDiv.classList.remove("mouseoverColor", "clickColor", "mouseleaveColor");
                    filledDiv.classList.add("gridCellsColor");

                    filledDiv.dataset.phase = "idle";
                    filledDiv.dataset.cycle = "1";

                    console.log(filledDiv.dataset.phase, filledDiv.dataset.cycle, "divarna är återställd");
                    console.log(filledDiv.classList.contains("mouseleaveColor"));
                }
            }
        })
        resetArrays(currentFilledDivs);
    }
}

createDivsButton.addEventListener("click", collectDivs);
clearButton.addEventListener("click", clearFilledDivs);
