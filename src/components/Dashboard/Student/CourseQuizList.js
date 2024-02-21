import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckQuizStatusForStudent from '../Teacher/CheckQuizStatusForStudent';
import axios from 'axios';
import config from '../../../config/config';


function CourseQuizList() {
    const [quizData, setQuizData] = useState([]);
    const studentId = localStorage.getItem('studentId');
    const { course_id } = useParams();

    useEffect(() => {
        document.title = 'Quiz List';

        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/fetch-assigned-quiz/${course_id}`);
                setQuizData(response.data);
            } catch (error) {
                console.error('Error fetching assigned quiz:', error);
            }
        };

        fetchQuizData();
    }, [course_id]);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Quiz List</h5>
                        <div className='card-body'>
                            {quizData.length > 0 ? (
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Quiz</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quizData.map((row, index) => (
                                            <tr key={row.id}>
                                                <td>{row.quiz.title}</td>
                                                <CheckQuizStatusForStudent quiz={row.quiz.id} student={studentId} />
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>No quizzes available</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CourseQuizList;
