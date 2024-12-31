const body = document.querySelector("body");


// Funktion som skapar Home-knapp
function createHomePageLink() {
    let homePageLink = document.createElement("a");
    homePageLink.setAttribute("href", "../home.html");
    homePageLink.textContent = "Home";

    let nav = document.querySelector("nav");
    nav.appendChild(homePageLink);
}

createHomePageLink();

//Funktion som skapar elementen i header (<p>, <input>, <button>)
function createElementsInHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    body.appendChild(header);

    const paragraphInHeader = document.createElement("p");
    paragraphInHeader.textContent = 'How many numbers in the grid?';

    const inputInHeader = document.createElement("input");
    inputInHeader.type = 'text';
    inputInHeader.classList.add("headerInput");

    const buttonCreate = document.createElement("button");
    buttonCreate.classList.add("buttonCreate");
    buttonCreate.textContent = 'Create';

    header.appendChild(paragraphInHeader);
    header.appendChild(inputInHeader);
    header.appendChild(buttonCreate);
}