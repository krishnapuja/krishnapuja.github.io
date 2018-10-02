import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.css';
import MailIcon from './mailIcon';
import PhoneIcon from './phoneIcon';
import DownloadIcon from './downloadIcon';

class Header extends Component {
    render() {
        return (
            <div >
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <div>Krishna Puja Anumula</div>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1}>
                                <PhoneIcon className='icons' />
                            </NavItem>
                            <NavItem eventKey={2}>
                                <MailIcon className='icons' />
                            </NavItem>
                            <NavItem eventKey={3}>
                                <DownloadIcon className='icons' />
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
