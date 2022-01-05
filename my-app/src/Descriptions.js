import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Descriptions ({handleAddBook}) {
    let params = useParams();
    const [bookInfo, setBookInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function getBook() {
        fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            setBookInfo(data);
            setIsLoaded(true);
        })
    }

    useEffect(() => {
        getBook();
    },[params]);

    if (!isLoaded) return <h2>Loading...</h2>

    function handleClick() {
    let title = bookInfo.volumeInfo.title;
    let author = bookInfo.volumeInfo.authors;
    console.log(title);
    console.log(author);

        const bookData = {
            'title': title,
            'author': author,
        };


        fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bookData),
          })
            .then((r) => r.json())
            .then((newBook) => handleAddBook(newBook));
    }



    return (
        <div>
            <img key={bookInfo.id} src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>
            <p>Title: {bookInfo.volumeInfo.title}</p>
            <p>Author(s): {bookInfo.volumeInfo.authors}</p>
            <p>Categorie(s): {bookInfo.volumeInfo.categories}</p>
            <p>Book Description: {bookInfo.volumeInfo.description}</p>
            <div>
                <button onClick={handleClick}>Add to Bookshelf</button>
            </div>
        </div>
    )
}

export default Descriptions
