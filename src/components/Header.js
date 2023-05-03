import { Link } from 'react-router-dom';

function Header() {
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  
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
            <Link className='nav-link' to='/all-subjects'>Subjects</Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" type="button" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Teacher
              </a>
              <ul className="dropdown-menu">
                {teacherLoginStatus !=='true' &&
                  <>
                    <li><Link className='dropdown-item' to='/teacher-login'>Login</Link></li>
                    <li><Link className='dropdown-item' to='/teacher-register'>Register</Link></li>
                  </>
                }
                <li><Link className='dropdown-item' to='/teacher-dashboard'>Dashboard</Link></li>
                <li><Link className='dropdown-item' to='/teacher-logout'>Logout</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" type="button" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User
              </a>
              <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to='/login'>Login</Link></li>
                <li><Link className='dropdown-item' to='/register'>Register</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className='dropdown-item' to='/dashboard'>Dashboard</Link></li>
                <li><Link className='dropdown-item' to='/logout'>Logout</Link></li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header;
