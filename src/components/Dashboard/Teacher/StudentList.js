import React from 'react'
import { Link } from 'react-router-dom' 
import TeacherSidebar from './TeacherSidebar'

function StudentList() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>Student List</h5>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Enrolled Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td><Link to="/">3</Link></td>
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

export default StudentList