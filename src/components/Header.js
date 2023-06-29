import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}.

export default Header;





// import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'

// const Header = () => {
//     return (
//         <div className='header'>
//             <Navbar expand="lg" position="fixed">
//                 <Container>
//                     <Navbar.Brand>shhiivvaam</Navbar.Brand>
//                     <Navbar.Toggle/>
//                     <Navbar.Collapse className='justify-content-end'>
//                         <Nav className='ml-auto'>
//                             <NavLink to='/' className="nav-link">Home</NavLink>
//                             <NavLink to='/projects' className="nav-link">Projects</NavLink>
//                             <NavLink to='/services' className="nav-link">Services</NavLink>
//                             <NavLink to='/about' className="nav-link">About</NavLink>
//                             <NavLink to='/contact' className="nav-link">Contact</NavLink>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default Header