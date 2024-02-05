import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function MyCourses() {
    useEffect(() => {
        document.title = 'My Courses'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/fetch-enrolled-courses/${studentId}`)
                .then((res) => {
                    setCourseData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Courses</h5>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Quiz</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((row, index) => (
                                        <tr>
                                            <td><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></td>
                                            <td style={{ whiteSpace: 'nowrap' }}><Link to={`/teacher-detail/${row.course.teacher.id}`}>{row.course.teacher.name}</Link></td>
                                            <td style={{ whiteSpace: 'nowrap' }}>
                                                <div className="btn-group">
                                                    <Link className='btn btn-sm btn-warning' to={`/course-quiz/${row.course.id}`}>Quiz List</Link>
                                                    <Link className='btn btn-sm btn-primary ms-1' to={`/student/study-materials/${row.course.id}`}>Study Material</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    )}
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