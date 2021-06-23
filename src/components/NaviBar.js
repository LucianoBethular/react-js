import React, { Component } from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './NaviBar'


function NaviBar ()  {
        return (
            
<div>
<Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="#home"><CardWidget /> <Link  to="/Home" className="link">BB-Techno</Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#home"><Link  to="/Home" className="link">Inicio</Link></Nav.Link>
    <Nav.Link href="#link"><Link to="/Contacto">Contacto</Link></Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Teclados</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mouses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Auriculares</NavDropdown.Item>
    </NavDropdown>
    </Nav>
</Navbar.Collapse>
</Navbar>
</div>

        )
    }
;


export default NaviBar;