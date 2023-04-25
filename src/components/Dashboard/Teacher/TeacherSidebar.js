import React from 'react'
import { Link } from 'react-router-dom'

function TeacherSidebar() {
  return (
    <div className='card'> 
        <div className='list-group list-group-flush'>
            <Link to='/teacher-dashboard' className='list-group-item list-group-item-action'>Dashboard</Link>
            <Link to='/subjects' className='list-group-item list-group-item-action'>My Subjects</Link>
            <Link to='/add-subjects' className='list-group-item list-group-item-action'>Add Subjects</Link>
            <Link to='/my-student' className='list-group-item list-group-item-action'>My Students</Link>
            <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
            <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
            <Link to='/login' className='list-group-item list-group-item-action text-danger'>Logout</Link>
        </div>
    </div>
    
  )
}

export default TeacherSidebar