const rootElement = document.getElementById("root");

const hElement = document.createElement("h1");
hElement.textContent = "React Bootcamp";

const pElement = document.createElement("p");
pElement.textContent = "Hello World!";

rootElement.append(hElement, pElement);
