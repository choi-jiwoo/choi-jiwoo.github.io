import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light py-4'>
      <div className='container-fluid'>
        <Link
          className='navbar-brand font-extrabold tracking-widest'
          to='/my-website'
        >
          <p className='text-blue-500'>Choi Ji Woo</p>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link
              className='nav-item nav-link font-extrabold tracking-widest'
              to='/my-website/cv'
            >
              CV
            </Link>
            <Link
              className='nav-item nav-link font-extrabold tracking-widest'
              to='/my-website/project'
            >
              Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
