import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import LOGO from '../../assets/images/logo.svg';
import ALCALA from '../../assets/images/alcala-logo.jpeg';
import './header.scss';
export const Header = () => {
    return (
        <Navbar className='header'>
            <Container>
                <Navbar.Brand href="/contact-us">
                    <img src={LOGO} alt="" className='logo-fincaraiz' />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <img src={ALCALA} alt="" className='' />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
