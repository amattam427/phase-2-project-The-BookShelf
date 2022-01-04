import React from 'react';
import {useState, useEffect} from 'react';

function BookShelf() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(data => setBooks(data))
    },[])

    return(
        <div>
            <h1>Welcome to your BookShelf</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        Author: {book.author},
                        Title: {book.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookShelf;