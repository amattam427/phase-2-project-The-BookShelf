import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
const [text, setText] = useState('');
const [result, setResult] = useState([]);
const apiKey  = 'AIzaSyCT0r5L6uQ72OM-DVT-6SOE_IOJXLnxVJ0';

  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}&maxResults=30`)
  //   .then(resp => resp.json)
  //   .then(data => console.log(data))
  // },[])

  function handleSubmit (e) {
    e.preventDefault();

      fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}&maxResults=30`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.items);
        setResult(data.items);
        console.log(result);
      })
  }

  function handleChange (e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>The Bookshelf</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          type='text' onChange={handleChange}
          // className='input-control'
          placeholder='Search for Books...'
          />
        </div>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default App;

    {/* // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}