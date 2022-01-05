import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

const Descriptions = ({setBooks}) => {
    const history= useHistory()
    let params = useParams();
    const [bookInfo, setBookInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    console.log(params);

    function getBook() {
        fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setBookInfo(data)
            setIsLoaded(true)
        })
    }

    useEffect(() => {
        getBook();
    },[params])

    if (!isLoaded) return <h2>Loading...</h2>



    return (
        <div>
        {
            bookInfo.length <= 0
                ?
            'Loading...'
                :
            <img key={bookInfo.id} src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>
        }
            <p>Author(s): {bookInfo.volumeInfo.authors}</p>
            <p>Categorie(s): {bookInfo.volumeInfo.categories}</p>
            <p>Book Description: {bookInfo.volumeInfo.description}</p>
            <div>
                <button onClick={() => history.push(`/books/${bookInfo.id}`)}>Add to Bookshelf</button>
            </div>
            </div>
    )
}



export default Descriptions

//like button 

//post request with the likes to dbjson file
//get 