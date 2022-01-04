import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Home () {
    const [text, setText] = useState('');
    const [result, setResult] = useState([]);
    const apiKey  = 'AIzaSyCT0r5L6uQ72OM-DVT-6SOE_IOJXLnxVJ0';
    const history = useHistory();
    
      function handleSubmit (e) {
        e.preventDefault();
    
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}&maxResults=30`)
          .then(resp => resp.json())
          .then(data => setResult(data.items))
      }
    
      function handleChange (e) {
        setText(e.target.value);
      }

    return(
        <div>
        <h1>The Bookshelf</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
            type='text' onChange={handleChange}
            placeholder='Search for Books...'
            />
          </div>
          <button type='submit'>Search</button>
        </form>
        {result.map(book => (
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} onClick={() => history.push(`/books/${book.id}`)}/>
        ))}
      </div>
    )
}

export default Home;