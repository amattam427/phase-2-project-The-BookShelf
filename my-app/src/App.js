import React from 'react';
import { useState } from 'react';
import Home from './Home'
import './App.css';

function App() {
const [text, setText] = useState('');
const [result, setResult] = useState([]);
const apiKey  = 'AIzaSyCT0r5L6uQ72OM-DVT-6SOE_IOJXLnxVJ0';

  function handleSubmit (e) {
    e.preventDefault();

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}&maxResults=30`)
      .then(resp => resp.json())
      .then(data => {
        setResult(data.items);
      })
  }

  function handleChange (e) {
    setText(e.target.value);
  }

  return (
    <Home handleSubmit={handleSubmit} handleChange={handleChange} result={result}/>
  );
}

export default App;