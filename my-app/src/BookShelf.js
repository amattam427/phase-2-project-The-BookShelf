import React from 'react';
import {useState, useEffect} from 'react';


function BookShelf() {
    const [books, setBooks] = useState([])

    function handleFavorites(e){
        e.preventDefault();

        const bookData={books}
    }
    

    useEffect(() => {
        fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body:JSON.stringify(bookData),

    }).then(resp => resp.json())
        .then(data => {
            setBooks(data)
        })

    })

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