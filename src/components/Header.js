import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [searchString, setSearchString] = useState('');

  const handleChange = (e) => {
    setSearchString(e.target.value);
  };

  const searchCourse = () => {
    if (searchString !== '') {
      window.location.href = '/search/' + searchString;
    }
  };

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus') === 'true';
  const studentLoginStatus = localStorage.getItem('studentLoginStatus') === 'true';

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Learn Online</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex" role="search">
          <input name='search' onChange={handleChange} className="form-control me-2" type="search" placeholder="Search by course title OR Technology" aria-label="Search" />
          <button onClick={searchCourse} className="btn btn-warning" type="button">Search</button>
        </form>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            <Link className='nav-link' to='/category'>Categories</Link>
            <Link className='nav-link' to='/all-courses'>Courses</Link>
            {teacherLoginStatus ? (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Teacher
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to='/teacher-dashboard'>Dashboard</Link></li>
                  <li><Link className='dropdown-item' to='/teacher-logout'>Logout</Link></li>
                </ul>
              </li>
            ) : studentLoginStatus ? null : (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Teacher
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to='/teacher-login'>Login</Link></li>
                  <li><Link className='dropdown-item' to='/teacher-register'>Register</Link></li>
                </ul>
              </li>
            )}
            {studentLoginStatus ? (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to='/student-dashboard'>Dashboard</Link></li>
                  <li><Link className='dropdown-item' to='/logout'>Logout</Link></li>
                </ul>
              </li>
            ) : teacherLoginStatus ? null : (
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className='dropdown-item' to='/login'>Login</Link></li>
                  <li><Link className='dropdown-item' to='/register'>Register</Link></li>
                </ul>
              </li>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;