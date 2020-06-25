import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import './styles.css';

export default function Nav() { 
    return(
        <Navbar sticky="top" bg="dark" variant="dark" className="colour-nav">
            <Navbar.Brand href="/">RPG Room</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}