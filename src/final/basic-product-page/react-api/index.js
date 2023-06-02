const rootElement = document.getElementById("root");

const headingElement = React.createElement("h1", null, "Product List");
const inputElement = React.createElement("input", {
  type: "text",
  placeholder: "Enter product name",
});

const productList = React.createElement(
  "ul",
  null,
  React.createElement("li", null, "Mechanical Keyboard"),
  React.createElement("li", null, "Mouse"),
  React.createElement("li", null, "Headset Gaming")
);

ReactDOM.render([headingElement, inputElement, productList], rootElement);
