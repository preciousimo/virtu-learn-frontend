import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [searchString, setSearchString] = useState({
    'search':''
  });

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  const studentLoginStatus = localStorage.getItem('studentLoginStatus')

  const handleChange = (e) => {
    setSearchString({
        ...searchString,
        [e.target.name]: e.target.value,
    });
};

  const searchCourse = () => {
    if (searchString.search!=''){
      window.location.href = '/search/'+searchString.search
    }
    
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>Learn Online</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false'
          aria-label='Toggle navigation'>
          <spam className="navbar-toggler-icon"></spam>
        </button>
        <form class="d-flex" role="search">
          <input name='search' onChange={handleChange} class="form-control me-2" type="search" placeholder="Search by course title OR Technology" aria-label="Search" />
          <button onClick={searchCourse} class="btn btn-warning" type="button">Search</button>
        </form>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
            <Link className='nav-link' to='/category'>Categories</Link>
            <Link className='nav-link' to='/all-courses'>Courses</Link>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teacher
              </Link>
              <ul className="dropdown-menu">
                {teacherLoginStatus != 'true' &&
                  <>
                    <li><Link className='dropdown-item' to='/teacher-login'>Login</Link></li>
                    <li><Link className='dropdown-item' to='/teacher-register'>Register</Link></li>
                  </>
                }
                {teacherLoginStatus == 'true' &&
                  <>
                    <li><Link className='dropdown-item' to='/teacher-dashboard'>Dashboard</Link></li>
                    <li><Link className='dropdown-item' to='/teacher-logout'>Logout</Link></li>
                  </>
                }
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" type="button" to="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </Link>
              <ul className="dropdown-menu">
                {studentLoginStatus != 'true' &&
                  <>
                    <li><Link className='dropdown-item' to='/login'>Login</Link></li>
                    <li><Link className='dropdown-item' to='/register'>Register</Link></li>
                  </>
                }
                {studentLoginStatus == 'true' &&
                  <>
                    <li><Link className='dropdown-item' to='/student-dashboard'>Dashboard</Link></li>
                    <li><Link className='dropdown-item' to='/logout'>Logout</Link></li>
                  </>
                }
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;
