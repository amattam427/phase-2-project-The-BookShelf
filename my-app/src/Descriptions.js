import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Button, Card, Container, Image} from 'react-bootstrap';

function Descriptions ({handleAddBook}) {
    let params = useParams();
    const [bookInfo, setBookInfo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    function getBook() {
        fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
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
    let image = bookInfo.volumeInfo.imageLinks.thumbnail;


        const bookData = {
            'title': title,
            'author': author,
            'image': image,
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
        <div className='App'>
            <Container>
                <Image key={bookInfo.id} className='m-1' src={bookInfo.volumeInfo.imageLinks.thumbnail} alt={bookInfo.volumeInfo.title}/>
                <Card className='m-1'>
                    <Card.Body>
                        <Card.Title style={{color: '#7B68EE'}}>Title</Card.Title>
                        <Card.Text style={{color: '#7B68EE'}}>{bookInfo.volumeInfo.title}</Card.Text>
                        <Card.Title style={{color: '#7B68EE'}}>Author(s)</Card.Title>
                        <Card.Text style={{color: '#7B68EE'}}>{bookInfo.volumeInfo.authors}</Card.Text>
                        <Card.Title style={{color: '#7B68EE'}}>Categorie(s)</Card.Title>
                        <Card.Text style={{color: '#7B68EE'}}>{bookInfo.volumeInfo.categories}</Card.Text>
                        <Card.Title style={{color: '#7B68EE'}}>Summary</Card.Title>
                        <Card.Text style={{color: '#7B68EE'}}>{bookInfo.volumeInfo.description}</Card.Text>
                        <Button style={{background:'#7B68EE'}} onClick={handleClick}>Add to Bookshelf</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Descriptions