import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from 'react';
import Todo from "./views/Todo";

function App() {
  let [name, setName] = useState('phu');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', title: 'xem pen' },
    { id: '2', title: 'xem phu' }

  ]);

  const handleEventClick = (event) => {
    if (!address) {
      alert('empty input')
      return;
    }
    let newTodo = { id: 'asd', title: address }
    setTodos([...todos, newTodo])
    setAddress('')
  }
  const handleOnChange = (event) => {
    setAddress(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          hello {name}
        </h1>
        <Todo data={todos} />
        <input type='text' value={address} onChange={(event) => handleOnChange(event)}></input>
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click Me
        </button>

      </header>
    </div>
  );
}

export default App;
