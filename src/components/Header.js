import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Meadow Hall</Link>
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
            <Link className='nav-link' to='/login'>Login</Link>
            <Link className='nav-link' to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;
