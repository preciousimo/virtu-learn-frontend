import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

function TeacherSubjects() {
    useEffect(() => {
        document.title = 'Teacher Subjects'
    }, [])
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Subjects</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Python</td>
                                        <td><Link to="/">43</Link></td>
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

export default TeacherSubjects