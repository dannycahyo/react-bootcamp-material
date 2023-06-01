const rootElement = document.getElementById("root");

const hElement = React.createElement("h1", { children: "React Bootcamp" });
const pElement = React.createElement("p", { children: "Hello World!" });

ReactDOM.render([hElement, pElement], rootElement);
