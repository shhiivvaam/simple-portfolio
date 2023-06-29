import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>shhiivvaam</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav className='ml-auto'>
                            <NavLink to='/' className="nav-link">Home</NavLink>
                            <NavLink to='/projects' className="nav-link">Projects</NavLink>
                            <NavLink to='/services' className="nav-link">Services</NavLink>
                            <NavLink to='/about' className="nav-link">About</NavLink>
                            <NavLink to='/contact' className="nav-link">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header