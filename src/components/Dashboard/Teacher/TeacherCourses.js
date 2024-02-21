import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import config from '../../../config/config';


function TeacherCourses() {
    useEffect(() => {
        document.title = 'Teacher Courses'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/teacher-courses/${teacherId}`)
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
                <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>My Courses</h5>
                    <div className='card-body' style={{ overflowX: 'auto' }}>
                        <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                            <thead>
                                <tr style={{ whiteSpace: 'nowrap' }}>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Total Enrolled</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course, index) => (
                                    <tr>
                                        <td>
                                            <Link to={`/all-chapters/${course.id}`}>{course.title}</Link>
                                            <hr />
                                            {course.course_rating &&
                                                <span>Rating: {course.course_rating}/5</span>
                                            }
                                            {!course.course_rating &&
                                                <span>Rating: 0/5</span>
                                            }
                                        </td>
                                        <td><img src={course.featured_img} width='80' className='rounded' alt={course.title} /></td>
                                        <td><Link to={`/enrolled-students/${course.id}`}>{course.total_enrolled_students}</Link></td>
                                        <td style={{ whiteSpace: 'nowrap' }}>
                                            <div className="btn-group">
                                                <Link className='btn btn-sm btn-info' to={`/edit-course/${course.id}`}>Edit</Link>
                                                <Link className='btn btn-sm btn-primary ms-1' to={`/study-materials/${course.id}`}>Study Material</Link>
                                                <Link className='btn btn-sm btn-success ms-1' to={`/add-chapter/${course.id}`}>Add Chapter</Link>
                                                <Link className='btn btn-sm btn-warning ms-1' to={`/assign-quiz/${course.id}`}>Assign Quiz</Link>
                                                <button className='btn btn-sm btn-danger ms-1'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
    
    )
}

export default TeacherCourses