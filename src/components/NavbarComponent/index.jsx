import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from '../NavComponent';
import { SearchComponent } from '../SearchComponent';

export const NavbarComponent = ({title, link}) => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href={`#${link}`}>{title}</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink title='Home' link='home'/>
                    <NavLink title='Features' link='features'/>
                    <NavLink title='Pricing' link='pricing'/>
                </Nav>
                <SearchComponent name='Search' type='search' className='m-2' placeholder='Search ...' />
            </Container>
        </Navbar>
    )
}
