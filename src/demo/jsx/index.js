const rootElement = document.getElementById("root");

const eventName = <h1>React Bootcamp</h1>;
const sayHelloToTheWorld = <p>Hello World!</p>;

let counter = 0;
const buttonCounter = (
  <button
    onClick={() => {
      counter++;
      alert(`counter ${counter}`);
    }}
  >
    Counter
  </button>
);

ReactDOM.render([eventName, sayHelloToTheWorld, buttonCounter], rootElement);
