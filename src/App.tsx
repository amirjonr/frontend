import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import api from "./constants/api";

function App() {
  const checkConnection = async (): Promise<void> => {
    const {data}  = await axios.get(api.CONNECTION_TEST)
    console.log(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={checkConnection}>Check Connection</button>
      </header>
    </div>
  );
}

export default App;
