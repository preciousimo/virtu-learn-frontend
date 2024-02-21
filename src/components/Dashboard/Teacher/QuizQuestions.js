import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../../../config/config';


function QuizQuestions() {
    useEffect(() => {
        document.title = 'Quiz Questions';
    }, []);

    const [questionData, setQuestionData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { quiz_id } = useParams();

    useEffect(() => {
        const fetchQuizQuestions = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/quiz-questions/${quiz_id}`);
                setTotalResult(response.data.length);
                setQuestionData(response.data);
            } catch (error) {
                console.error('Error fetching quiz questions:', error);
            }
        };

        fetchQuizQuestions();
    }, [quiz_id]);

    const handleDeleteClick = (question_id) => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${config.baseUrl}/question/${question_id}`);
                    Swal.fire('success', 'Data has been deleted.');
                    try {
                        const response = await axios.delete(`${config.baseUrl}/quiz-questions/${quiz_id}`);
                        setTotalResult(response.data.length);
                        setQuestionData(response.data);
                    } catch (error) {
                        console.error('Error deleting quiz questions:', error);
                    }
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
                        <h5 className='card-header'>
                            All Questions ({totalResult}){' '}
                            <Link className='btn btn-success btn-sm float-end' to={`/add-questions/${quiz_id}`}>
                                Add Questions
                            </Link>
                        </h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(questionData) &&
                                        questionData.map((question, index) => (
                                            <tr key={question.id}>
                                                <td>
                                                    <Link to={'/edit-question/' + question.id}>{question.question}</Link>
                                                </td>
                                                <td>
                                                    <Link to={'/edit-question/' + question.id} className='btn btn-sm btn-info'>
                                                        <i className='bi bi-pencil-square'></i>
                                                    </Link>
                                                    <button onClick={() => handleDeleteClick(question.id)} className='btn btn-sm btn-danger ms-1'>
                                                        <i className='bi bi-trash'></i>
                                                    </button>
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

export default QuizQuestions;
