import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar () {
    return(
        <div>
            <NavLink to='/'>
            Home
            </NavLink>
            <NavLink to='/about'>
            About
            </NavLink>
            <NavLink to='/bookshelf'>
            BookShelf
            </NavLink>
        </div>
    )
}

export default NavBar;