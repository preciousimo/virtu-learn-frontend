import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import QuizResult from './QuizResult';
import config from '../../../config/config';


function AttemptedStudents() {
    const [studentData, setStudentData] = useState([]);
    const { quiz_id } = useParams();

    useEffect(() => {
        document.title = 'Attempted Quiz';

        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/attempted-quiz/${quiz_id}`);
                setStudentData(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [quiz_id]);

    const fetchQuizResult = async (studentId) => {
        try {
            const response = await axios.get(`${config.baseUrl}/quiz-result/${quiz_id}/${studentId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching quiz result:', error);
            return null;
        }
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Student List</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.map((row, index) => (
                                        <tr key={row.id}>
                                            <td>{row.student.name}</td>
                                            <td>{row.student.email}</td>
                                            <td>{row.student.username}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#resultModal-${row.id}`}
                                                >
                                                    Quiz Result
                                                </button>
                                                <div className="modal fade" id={`resultModal-${row.id}`} tabIndex="-1" aria-labelledby={`resultModalLabel-${row.id}`} aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title" id={`resultModalLabel-${row.id}`}>Quiz Result</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <QuizResult quiz={row.quiz.id} student={row.student.id} />
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
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
    );
}

export default AttemptedStudents;
