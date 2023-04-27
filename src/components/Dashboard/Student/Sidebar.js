import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='card'> 
        <div className='list-group list-group-flush'>
            <Link to='/dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
            <Link to='/my-subjects' className='list-group-item list-group-item-action'>My Subjects</Link>
            <Link to='/favorite-subjects' className='list-group-item list-group-item-action'>Favorite Subjects</Link>
            <Link to='/recommended-subjects' className='list-group-item list-group-item-action'>Recommended Subjects</Link>
            <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
            <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
            <Link to='/login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
        </div>
    </div>
    
  )
}

export default Sidebar