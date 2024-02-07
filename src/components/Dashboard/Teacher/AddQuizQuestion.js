import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddQuizQuestion() {
    useEffect(() => {
        document.title = 'Add Quiz Question';
    }, []); // Empty dependency array to run the effect only once

    const [questionData, setQuestionData] = useState({
        quiz: '',
        question: '',
        ans1: '',
        ans2: '',
        ans3: '',
        ans4: '',
        right_ans: '',
    });

    const handleChange = (e) => {
        setQuestionData({
            ...questionData,
            [e.target.name]: e.target.value,
        });
    };

    const { quiz_id } = useParams();

    const formSubmit = (e) => {
        e.preventDefault();
        const _formData = new FormData();
        _formData.append('quiz', quiz_id);
        _formData.append('question', questionData.question);
        _formData.append('ans1', questionData.ans1);
        _formData.append('ans2', questionData.ans2);
        _formData.append('ans3', questionData.ans3);
        _formData.append('ans4', questionData.ans4);
        _formData.append('right_ans', questionData.right_ans);

        axios.post(`${baseUrl}/quiz-questions/${quiz_id}`, _formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Correct content type header
            },
        })
        .then((res) => {
            if (res.status === 200 || res.status === 201) {
                Swal.fire({
                    title: 'Data has been added',
                    icon: 'success',
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
                window.location.reload();
            }
        })
        .catch((err) => {
            console.error(err); // Handle errors appropriately
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
                        <h5 className='card-header'>Add Quiz Question</h5>
                        <div className='card-body'>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="question" className="form-label">Question</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="question"
                                        name="question"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans1" className="form-label">Ans 1</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans1"
                                        name="ans1"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans2" className="form-label">Ans 2</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans2"
                                        name="ans2"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans3" className="form-label">Ans 3</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans3"
                                        name="ans3"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ans4" className="form-label">Ans 4</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans4"
                                        name="ans4"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="right_ans" className="form-label">Right Answer</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="right_ans"
                                        name="right_ans"
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type='submit' className='btn btn-secondary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddQuizQuestion;
