const rootElement = document.getElementById("root");

const container = document.createElement("div");
container.className = "container";

const heading = document.createElement("h1");
heading.textContent = "Product List";

const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter product name");

const list = document.createElement("ul");

const firstProduct = document.createElement("li");
firstProduct.textContent = "Mechanical Keyboard";

const secondProduct = document.createElement("li");
secondProduct.textContent = "Mouse";

const thirdProduct = document.createElement("li");
thirdProduct.textContent = "Headset Gaming";

list.append(firstProduct, secondProduct, thirdProduct);

container.appendChild(heading);
container.appendChild(input);
container.appendChild(list);

rootElement.appendChild(container);
