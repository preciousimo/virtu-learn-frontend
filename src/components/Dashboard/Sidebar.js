import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className='col-md-3'>
        <div className='card'>
            <h5 className='card-header'>Dashboard</h5>
            <div className='list-group list-group-flush'>
                <Link to='/dashboard' className='list-group-item list-group-item-action'>My Subjects</Link>
                <Link to='/favsub' className='list-group-item list-group-item-action'>Favorite Subjects</Link>
                <Link to='/recsub' className='list-group-item list-group-item-action'>Recommended Subjects</Link>
                <Link t0='/' className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link t0='/' className='list-group-item list-group-item-action'>Change Password</Link>
                <Link t0='/' className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar