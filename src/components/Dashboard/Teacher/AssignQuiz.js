import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import CheckQuizInCourse from './CheckQuizInCourse';
import config from '../../../config/config';


function AssignQuiz() {
    const [quizData, setQuizData] = useState([]);
    const [courseData, setCourseData] = useState({});
    const teacherId = localStorage.getItem('teacherId');
    const { course_id } = useParams();

    useEffect(() => {
        document.title = 'Assign Quiz';

        try {
            axios.get(`${config.baseUrl}/teacher-quiz/${teacherId}`)
                .then((res) => {
                    setQuizData(res.data);
                });
        } catch (err) {
            console.log(err);
        }

        // Fetch course data
        try {
            axios.get(`${config.baseUrl}/course/${course_id}`)
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
                        <h5 className='card-header'>Assign Quiz <span className='text-primary'>({courseData.title})</span></h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizData.map((row) => (
                                        <tr key={row.id}>
                                            <td>
                                                <Link to={`/all-questions/${row.id}`}>{row.title}</Link>
                                            </td>
                                            <CheckQuizInCourse quiz={row.id} course={course_id} />
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AssignQuiz;
