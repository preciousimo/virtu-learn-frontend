import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

import config from '../../../config/config';

function FavCourses() {
    useEffect(() => {
        document.title = 'Favourite Courses'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/fetch-favourite-courses/${studentId}`)
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
                        <h5 className='card-header'>Favourite Courses</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.map((row, index) => (
                                        <tr>
                                            <td><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></td>
                                            <td><Link to={`/teacher-detail/${row.course.teacher.id}`}>{row.course.teacher.name}</Link></td>
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

export default FavCourses