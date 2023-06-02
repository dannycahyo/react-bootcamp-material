const rootElement = document.getElementById("root");

const App = () => {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          alert(`counter ${counter}`);
        }}
      >
        Counter
      </button>
      <p>{counter}</p>
    </div>
  );
};

ReactDOM.render(<App />, rootElement);
