/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <div className='card'>
                    <h5 className='card-header'>Dashboard</h5>
                    <div className='list-group list-group-flush'>
                        <Link to='/' className='list-group-item list-group-item-action'>My Subjects</Link>
                        <Link to='/' className='list-group-item list-group-item-action'>Favorite Subjects</Link>
                        <Link to='/' className='list-group-item list-group-item-action'>Recommended Subjects</Link>
                        <Link t0='/' className='list-group-item list-group-item-action'>Profile Setting</Link>
                        <Link t0='/' className='list-group-item list-group-item-action'>Change Password</Link>
                        <Link t0='/' className='list-group-item list-group-item-action text-danger'>Logout</Link>
                    </div>
                </div>
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>My Subjects</h5>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Created By</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Python</td>
                                    <td><Link to="/">John Doe</Link></td>
                                    <td>
                                        <a href='#' className='btn btn-sm btn-primary'>View</a>
                                        <a href='#' className='btn btn-sm btn-secondary'>Edit</a>
                                        <a href='#' className='btn btn-sm btn-danger'>Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Dashboard