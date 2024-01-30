import { Link } from 'react-router-dom'

function TeacherSidebar() {
  return (
    <div className='card'> 
        <div className='list-group list-group-flush'>
            <Link to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
            <Link to='/teacher-courses' className='list-group-item list-group-item-action'>My Courses</Link>
            <Link to='/add-courses' className='list-group-item list-group-item-action'>Add Courses</Link>
            <Link to='/teacher-students' className='list-group-item list-group-item-action'>My Students</Link>
            <Link to='/quiz' className='list-group-item list-group-item-action'>Quiz</Link>
            <Link to='/add-quiz' className='list-group-item list-group-item-action'>Add Quiz</Link>
            <Link to='/teacher-profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
            <Link to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
            <Link to='/teacher-logout' className='list-group-item list-group-item-action text-danger'>Logout</Link>
        </div>
    </div>
    
  )
}

export default TeacherSidebar