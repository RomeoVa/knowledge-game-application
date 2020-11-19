import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

import './Navbar.css'; 

import {
    AmplifySignOut
  } from '@aws-amplify/ui-react'

function NavBar(props)
{

    return(
        <Navbar className="kg-navbar" bg="dark" expand="lg">
            <Navbar.Brand href="/">Knowledge Game</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                <AmplifySignOut/>
            </Navbar.Collapse>
        </Navbar>
    );

}export default NavBar;