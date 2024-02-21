import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import config from '../../../config/config';


function RecommendedCourses() {
    const [courseData, setCourseData] = useState([]);
    const [loading, setLoading] = useState(true);

    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        document.title = 'Recommended Courses';

        try {
            axios.get(`${config.baseUrl}/fetch-recommended-courses/${studentId}`)
                .then((res) => {
                    setCourseData(res.data);
                    setLoading(false);
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
                        <div className='card-body'>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                Array.isArray(courseData) && courseData.length > 0 ? (
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Technologies</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courseData.map((row, index) => (
                                                <tr key={index}>
                                                    <td><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></td>
                                                    <td>{row.course.techs}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No courses found.</p>
                                )
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default RecommendedCourses;
