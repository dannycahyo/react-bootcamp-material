const rootElement = document.getElementById("root");

function UserInfo({ userName }) {
  return (
    <div>
      <h1>{userName}</h1>
      <p>Hello There!</p>
    </div>
  );
}

function Greeting({ subject, greeting }) {
  return (
    <div>
      {greeting}, {subject}
    </div>
  );
}

const element = (
  <div>
    <UserInfo userName="Danny" />
    <Greeting greeting="Yohoho" subject="HIMTI UNESA" />
  </div>
);

ReactDOM.render(element, rootElement);
