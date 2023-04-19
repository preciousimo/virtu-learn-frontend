import React from 'react'

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href=' '>Meadow Hall</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
        data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false'
        aria-label='Toggle navigation'>
          <spam className="navbar-toggler-icon"></spam>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <a className='nav-link active' aria-current='page' href=' '>Home</a>
            <a className='nav-link' href=' '>Subjects</a>
            <a className='nav-link' href=' '>Teachers</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;
