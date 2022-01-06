import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Container} from 'react-bootstrap';

function NavBar () {

    return(
        <div>
            <Navbar sticky='top'>
                <Container>
                        <NavLink
                        to='/about'
                        exact
                        style={{
                            display: "inline-block",
                            width: "66px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}
                        >
                            About
                        </NavLink>

                        <NavLink
                        to='/bookshelf'
                        exact
                        style={{
                            display: "inline-block",
                            width: "98px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}
                        >
                            BookShelf
                        </NavLink>

                        <NavLink
                        to='/'
                        exact
                        style={{
                            display: "inline-block",
                            width: "66px",
                            padding: "12px",
                            margin: "0 6px 6px",
                            textDecoration: "none",
                            color: "#B0C4DE",
                        }}
                        activeStyle={{
                          color: '#7B68EE',
                        }}>
                            Home
                        </NavLink>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;