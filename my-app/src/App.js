import React from 'react';
import About from './About';
import BookShelf from './BookShelf';
import Home from './Home';
import NavBar from './NavBar';
import Descriptions from './Descriptions';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
const [books, setBooks] = useState([]);

    function handleAddBook(newBook) {
      const newBookArray = [newBook, ...books];
      setBooks(newBookArray)
    }

  return (
    <div>

      <NavBar />

      <Switch>

        <Route path='/books/:id'>
          <Descriptions handleAddBook={handleAddBook} />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/bookshelf'>
          <BookShelf books={books} />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;