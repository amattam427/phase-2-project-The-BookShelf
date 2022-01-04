import React from 'react';
import About from './About';
import BookShelf from './BookShelf';
import Home from './Home';
import NavBar from './NavBar';
import Descriptions from './Descriptions'
import {Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>

      <NavBar />

      <Switch>

        <Route path='/books/:id'>
          <Descriptions />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/bookshelf'>
          <BookShelf />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>

    </div>
  );
}

export default App;