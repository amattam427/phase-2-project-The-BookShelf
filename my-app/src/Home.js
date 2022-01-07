import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button, Card, Form, Container, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Home () {
    const [text, setText] = useState('');
    const [result, setResult] = useState([]);
    const apiKey  = 'AIzaSyCT0r5L6uQ72OM-DVT-6SOE_IOJXLnxVJ0';
    const history = useHistory();
    
      function handleSubmit (e) {
        e.preventDefault();
    
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=${apiKey}&maxResults=35`)
          .then(resp => resp.json())
          .then(data => setResult(data.items))
          .catch(error => alert(error))
      }
    
      function handleChange (e) {
        setText(e.target.value);
      }

    return(
        <div className='App'>
        <Container>
            <Card className='mb-3'>
                <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label style={{color:'#7B68EE'}} >The Bookshelf App</Form.Label>
                        <Form.Control type='text' placeholder='Search for Books...' onChange={handleChange} />
                    </Form.Group>
                    <Button style={{background:'#7B68EE'}} className='mt-3' type='submit'>Search</Button>
                </Form>
                </Card.Body>
            </Card>
            <div>
            {result.map(book => (
                <Image
                key={book.id}
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.title}
                onClick={() => history.push(`/books/${book.id}`)}
                className='m-1'
                />
            ))}
            </div>
            </Container>
        </div>
    )
}

export default Home;