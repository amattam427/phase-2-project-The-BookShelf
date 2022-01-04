import React from 'react';

function Home ({ handleChange, handleSubmit, result }) {

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
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        ))}
      </div>
    )
}

export default Home;