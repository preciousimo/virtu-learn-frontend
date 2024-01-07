import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function MyCourses() {
    useEffect(() => {
        document.title = 'My Subjects'
    }, [])
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
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

export default MyCourses