import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar className='py-4' expand='lg'>
      <Link
        className='navbar-brand font-extrabold tracking-widest'
        to='/choijiwoo'
      >
        <p className='text-blue-500'>Choi Ji Woo</p>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Link
            className='nav-link font-extrabold tracking-widest'
            to='/choijiwoo/cv'
          >
            CV
          </Link>
          <Link
            className='nav-link font-extrabold tracking-widest'
            to='/choijiwoo/project'
          >
            Project
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
