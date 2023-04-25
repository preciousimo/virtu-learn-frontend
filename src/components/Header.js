/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>SONIPS School</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
        data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false'
        aria-label='Toggle navigation'>
          <spam className="navbar-toggler-icon"></spam>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            <a className='nav-link' href=' '>Subjects</a>
            <a className='nav-link' href=' '>Teachers</a>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" type="button" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to='/login'>Login</Link></li>
                <li><Link className='dropdown-item' to='/register'>Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className='dropdown-item' to='/dashboard'>Dashboard</Link></li>
                <li><a className='dropdown-item' href='#'>Logout</a></li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;
