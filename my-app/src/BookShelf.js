import React from 'react';
import {useState, useEffect} from 'react';

function BookShelf({books}) {
    const [favBooks, setFavBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(data => setFavBooks(data))
    },[books])

    return(
        <div>
            <h1>Welcome to your BookShelf</h1>
            <ul>
                {favBooks.map(book => (
                    <li key={book.id}>
                        Author: {book.author},
                        Title: {book.title}
                        {/* add the thumbnail as an image here too */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookShelf;