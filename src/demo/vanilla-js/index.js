const rootElement = document.getElementById("root");

const hElement = document.createElement("h1");
hElement.textContent = "React Bootcamp";

const pElement = document.createElement("p");
pElement.textContent = "Hello World!";

const buttonElement = document.createElement("button");
buttonElement.textContent = "Counter";

let counter = 0;

buttonElement.addEventListener("click", () => {
  counter++;
  alert(`counter ${counter}`);
});

rootElement.append(hElement, pElement, buttonElement);
