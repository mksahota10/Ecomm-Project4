import React from 'react'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" coollapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Blazen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
