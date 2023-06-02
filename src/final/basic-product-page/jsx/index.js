const rootElement = document.getElementById("root");

const container = (
  <div className="container">
    <h1>Product List</h1>
    <input type="text" placeholder="Enter product name" />
    <ul>
      <li>Mechanical Keyboard</li>
      <li>Mouse</li>
      <li>Headset Gaming</li>
    </ul>
  </div>
);

ReactDOM.render(container, rootElement);
