import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function Descriptions () {
    let params = useParams();
    const [bookInfo, setBookInfo] = useState([]);
    console.log(params);

    function getBook() {
        fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            setBookInfo(data)
        })
    }

    useEffect(() => {
        getBook();
    },[])



    return (
        <div>

        {<img key={bookInfo.id} src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>}

        </div>
    )
}

// {bookInfo.map(book => (
//     <img key={book.id} src={book.imageLinks.thumbnail} alt={'image'}/>
// ))}

export default Descriptions