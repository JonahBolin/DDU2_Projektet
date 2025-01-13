const body = document.querySelector("body");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const homeContainer = document.createElement("div");
const gitHubContainer = document.createElement("div");

homeContainer.className = "homeContainer";
gitHubContainer.className = "gitHubContainer";

const header = document.createElement("header");
header.classList.add("header");

body.insertBefore(header, main);

const paragraphInHeader = document.createElement("p");
paragraphInHeader.textContent = "How many numbers in the grid?";

const inputInHeader = document.createElement("input");
inputInHeader.type = "text";
inputInHeader.value = "";
inputInHeader.classList.add("headerInput");

const buttonCreate = document.createElement("button");
buttonCreate.classList.add("buttonCreate");
buttonCreate.textContent = "Create";

nav.appendChild(homeContainer);
nav.appendChild(gitHubContainer);
header.appendChild(paragraphInHeader);
header.appendChild(inputInHeader);
header.appendChild(buttonCreate);

// Funktion som skapar randomNumber
function createRandomNumber() {
    //min = 1, max = 95, interval = max -min + min
    const interval = 95 - 1 + 1;
    let randomNumber = Math.floor(Math.random() * interval) + 1;
    return randomNumber;
}
// Funktion som skapar Home-knapp
function createHomePageLink() {
function createLinks() {
    let homePageLink = document.createElement("a");
    homePageLink.setAttribute("href", "../home.html");
    homePageLink.textContent = "Home";
    homePageLink.className = "homeFontWeight";

    let nav = document.querySelector("nav");
    nav.appendChild(homePageLink);
}

//Funktion som skapar elementen i header (<p>, <input>, <button>)
/*function createElementsInHeader() {
   
    homeContainer.appendChild(homePageLink);

}*/
    const gitHubLink = document.createElement("a");
    gitHubLink.setAttribute("href", "https://github.com/JonahBolin/DDU2_Projektet");
    gitHubLink.textContent = "Visit my Github repository here";
    gitHubLink.className = "gitHub";


buttonCreate.addEventListener("click", function () {
    const value = parseInt(inputInHeader.value, 10);
    console.log(value);
    //anrop till createGrid
    createGrid(value);
})
    gitHubContainer.appendChild(gitHubLink);
}

//funktion som skapar grid-nätet

function createGrid(amountOfCells) {
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.classList.add("gridShell");
    console.log(gridContainer.innerHTML);

    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = "repeat(5, 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(19, 1fr)";
    gridContainer.style.justifyItems = "center";

    gridContainer.innerHTML = "";

    for (let i = 0; i < amountOfCells; i++) {

        const cell = document.createElement("div");
        gridContainer.appendChild(cell);

        cell.classList.add("gridCells");
        const randomNumber = createRandomNumber();
        cell.textContent = randomNumber;
    }
}

// anrop / event-listeners
createHomePageLink();

/*document.addEventListener("DOMContentLoaded", function () {
    createElementsInHeader();
})*/


