import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import CheckQuizInCourse from './CheckQuizInCourse';

const baseUrl = 'http://127.0.0.1:8000/api';

function AssignQuiz() {
    useEffect(() => {
        document.title = 'Assign Quiz';
    }, []);

    const [quizData, setQuizData] = useState([]);
    const [courseData, setCourseData] = useState({});
    const teacherId = localStorage.getItem('teacherId');
    const { course_id } = useParams();

    useEffect(() => {
        // Fetch quiz data
        try {
            axios.get(`${baseUrl}/teacher-quiz/${teacherId}`)
                .then((res) => {
                    setQuizData(res.data);
                });
        } catch (err) {
            console.log(err);
        }

        // Fetch course data
        try {
            axios.get(`${baseUrl}/course/${course_id}`)
                .then((res) => {
                    setCourseData(res.data);
                });
        } catch (err) {
            console.error(err);
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
