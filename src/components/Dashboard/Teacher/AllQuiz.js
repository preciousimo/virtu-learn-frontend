import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function AllQuiz() {
    useEffect(() => {
        document.title = 'Teacher Courses';
    }, []);

    const [quizData, setQuizData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await axios.get(baseUrl + '/teacher-quiz/' + teacherId);
                setQuizData(response.data);
            } catch (error) {
                console.error('Error fetching quiz data:', error);
            }
        };

        fetchQuizData();
    }, [teacherId]);

    const handleDeleteClick = (quiz_id) => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(baseUrl + '/quiz/' + quiz_id)
                        .then((res) => {
                            Swal.fire('success', 'Data has been deleted.');
                            const updatedQuizData = quizData.filter(quiz => quiz.id !== quiz_id);
                            setQuizData(updatedQuizData);
                        });
                } catch (error) {
                    Swal.fire('error', 'Data has not been deleted!!');
                }
            } else {
                Swal.fire('error', 'Data has not been deleted!!');
            }
        });
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Quiz</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizData.map((quiz, index) => (
                                        <tr key={quiz.id}>
                                            <td>
                                                <Link to={`/all-questions/${quiz.id}`}>{quiz.title}</Link>
                                            </td>
                                            <td>
                                                <Link className='btn btn-sm btn-success ms-2' to={`/add-quiz-question/${quiz.id}`}>Add Question</Link>
                                                <Link className='btn btn-sm btn-warning ms-2' to={`/edit-quiz/${quiz.id}`}>Edit</Link>
                                                <button onClick={() => handleDeleteClick(quiz.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
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

export default AllQuiz;
