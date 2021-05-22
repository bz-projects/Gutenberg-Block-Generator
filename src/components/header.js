import React, { Component } from 'react';
import { 
    Navbar, 
    Nav
} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return(
            <Navbar className="gb__navbar" expand="lg">
                <div className="gb__navbar-container header container">
                    <Navbar.Brand className="gb__navbar-logo" href="#home">
                        <img alt="Logo" src="logo.svg" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="gb__navbar-list mr-auto">
                            <Nav.Link className="gb__navbar-list-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="gb__navbar-list-link" target="_blank" href="https://www.gutenberg-handbook.com/">Gutenberg Handbook</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}
