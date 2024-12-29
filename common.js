
// Funktion som skapar Home-knapp
function createHomePageLink() {
    let homePageLink = document.createElement("a");
    homePageLink.setAttribute("href", "../home.html");
    homePageLink.textContent = "Home";

    let nav = document.querySelector("nav");
    nav.appendChild(homePageLink);
}

createHomePageLink();