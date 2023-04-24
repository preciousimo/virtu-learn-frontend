/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function FavSubject() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <Sidebar />
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>Favourite Subjects</h5>
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

export default FavSubject