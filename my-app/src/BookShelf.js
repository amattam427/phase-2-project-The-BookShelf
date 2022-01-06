import React from 'react';
import {useState, useEffect} from 'react';
import { Card, Container, ListGroup, Image } from 'react-bootstrap';

function BookShelf({books}) {
    const [favBooks, setFavBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then(resp => resp.json())
        .then(data => setFavBooks(data))
    },[books])

    return(
        <div className='App'>
            <Container>
                <h1 style={{color:'#7B68EE'}}>Welcome to your BookShelf</h1>
                    <Card>
                        <ListGroup>
                            {favBooks.map(book => (
                                <ListGroup.Item key={book.id}>
                                    <Image src={book.image} />
                                    Author: {book.author},
                                    Title: {book.title}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
            </Container>
        </div>
    )
}

export default BookShelf;