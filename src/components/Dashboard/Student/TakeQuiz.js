import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import config from '../../../config/config';


function TakeQuiz() {
    const [questionData, setQuestionData] = useState([]);
    const { quiz_id } = useParams();
    const studentId = localStorage.getItem('studentId');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = 'Attempt Quiz';

        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${config.baseUrl}/quiz-questions/${quiz_id}/1`);
                setQuestionData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch quiz questions. Please try again later.',
                });
            }
        };

        fetchQuestions();
    }, [quiz_id]);

    const submitAnswer = async (question_id, right_ans) => {
        const formData = new FormData();
        formData.append('student', studentId);
        formData.append('quiz', quiz_id);
        formData.append('question', question_id);
        formData.append('right_ans', right_ans);

        try {
            const response = await axios.post(`${config.baseUrl}/attempt-quiz/`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });

            if (response.status === 200 || response.status === 201) {
                const nextQuestionResponse = await axios.get(`${config.baseUrl}/quiz-questions/${quiz_id}/next-question/${question_id}`);
                if (nextQuestionResponse.data.length === 0) {
                    setQuestionData([]);
                } else {
                    setQuestionData(nextQuestionResponse.data);
                }
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to submit answer. Please try again later.',
            });
        }
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <h4 className='mb-3 border-bottom pb-1'>Quiz Title</h4>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : questionData.length > 0 ? (
                        questionData.map((row, index) => (
                            <div key={row.id} className='card'>
                                <h5 className='card-header'>{row.question}</h5>
                                <div className='card-body'>
                                    <table className='table table-bordered'>
                                        <tbody>
                                            <tr>
                                                <td><button onClick={() => submitAnswer(row.id, row.ans1)} className='btn btn-outline-secondary'>{row.ans1}</button></td>
                                            </tr>
                                            <tr>
                                                <td><button onClick={() => submitAnswer(row.id, row.ans2)} className='btn btn-outline-secondary'>{row.ans2}</button></td>
                                            </tr>
                                            <tr>
                                                <td><button onClick={() => submitAnswer(row.id, row.ans3)} className='btn btn-outline-secondary'>{row.ans3}</button></td>
                                            </tr>
                                            <tr>
                                                <td><button onClick={() => submitAnswer(row.id, row.ans4)} className='btn btn-outline-secondary'>{row.ans4}</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))
                    ) : (
                        <>
                            <div className="alert alert-info" role="alert">
                                Quiz Completed!
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <Link to="#" className="btn btn-primary">Go Back Home</Link>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}

export default TakeQuiz;
