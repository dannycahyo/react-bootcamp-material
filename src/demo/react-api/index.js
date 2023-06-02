const rootElement = document.getElementById("root");

const hElement = React.createElement("h1", { children: "React Bootcamp" });
const pElement = React.createElement("p", { children: "Hello World!" });

let counter = 0;

const buttonElement = React.createElement("button", {
  children: "Counter",
  onClick: () => {
    counter++;
    alert(`counter ${counter}`);
  },
});

console.log(buttonElement);

ReactDOM.render([hElement, pElement, buttonElement], rootElement);
