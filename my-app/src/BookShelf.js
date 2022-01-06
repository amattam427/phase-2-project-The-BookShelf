import React from 'react';
import {useState, useEffect} from 'react';
import { Card, Container, ListGroup, Image, Row } from 'react-bootstrap';

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
                                <ListGroup.Item key={book.id} style={{color:'#7B68EE'}} onClick={(e) => e.target.remove()}>
                                    {/* <Image src={book.image} /> */}
                                    {book.title} by {book.author}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
            </Container>
        </div>
    )
}

export default BookShelf;