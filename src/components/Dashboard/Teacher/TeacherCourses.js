import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherCourses() {
    useEffect(() => {
        document.title = 'Teacher Courses'
    }, [])

    const [courseData, setCourseData]=useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
            axios.get(baseUrl+'/teacher-courses/'+teacherId)
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
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Total Enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((course, index) => (
                                    <tr>
                                        <td><Link to={`/all-chapters/${course.id}`}>{course.title}</Link></td>
                                        <td><img src={course.featured_img} width='80' className='rounded' alt={course.title}/></td>
                                        <td><Link to="/">43</Link></td>
                                        <td>
                                            <button className='btn btn-sm btn-danger'>Delete</button>
                                            <Link href='#' className='btn btn-sm btn-success ms-2' to={`/add-chapter/${course.id}`}>Add Chapter</Link>
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

export default TeacherCourses