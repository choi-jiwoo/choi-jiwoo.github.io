import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import cv from '../asset/cv.pdf';

const NavigationBar = () => {
  return (
    <Navbar className='py-4' variant="dark" expand='lg'>
      <Link
        className='navbar-brand font-extrabold tracking-widest'
        to='/choijiwoo'
      >
        <p className='text-2xl text-blue-500 tracking-widest'>CHOI JI WOO</p>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto justify-content-end flex-grow-1'>
          <Link
            className='nav-link font-extrabold tracking-widest'
            to={cv}
            target='_blank'
          >
            CV
          </Link>
          <Link
            className='nav-link font-extrabold tracking-widest'
            to='/choijiwoo/project'
          >
            PROJECT
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
