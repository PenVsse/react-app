import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = 'phu';
  let number = 2022;
  let obj = { name: 'react', id: '1' }
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=9&ab_channel=H%E1%BB%8FiD%C3%A2nIT';
  return (
    <div className="App">
      {console.log(obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello id: {obj.id} name {name} in {number}
        </p>
        <a href={link}> link ne</a>

      </header>
    </div>
  );
}

export default App;
