import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [namesToGreet, setNamesToGreet] = useState([]);
  const [namesToBye, setNamesToBye] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`).then((response) => {
      setNamesToGreet(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/bye`).then((response) => {
      setNamesToBye(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Hello{' '}
          {namesToGreet.map((n) => (
            <span key={n.name}>{n.name}</span>
          ))}
        </a>
        <p></p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Bye{' '}
          {namesToBye.map((n) => (
            <span key={n.name}>{n.name}</span>
          ))}
        </a>
      </header>
    </div>
  );
}

export default App;
