import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';

const NavigationBar = () => {
    return ( 
            <div>
                <BrowserRouter>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <Container>

                        <Navbar.Brand href="#home">Last One Standing</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/redirect">Contact Us</Nav.Link>
                                <Nav.Link href="/contact-us">About Us</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                </Routes>
                </BrowserRouter>
            </div>
    );
};

export default NavigationBar;