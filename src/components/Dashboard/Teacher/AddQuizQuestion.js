import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function AddQuizQuestion() {
    useEffect(() => {
        document.title = 'Add Quiz Question';
    }, []);

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

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('quiz', quiz_id);
        _formData.append('question', questionData.question);
        _formData.append('ans1', questionData.ans1);
        _formData.append('ans2', questionData.ans2);
        _formData.append('ans3', questionData.ans3);
        _formData.append('ans4', questionData.ans4);
        _formData.append('right_ans', questionData.right_ans);

        try {
            axios.post(`${baseUrl}/quiz-questions/${quiz_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'Data has been added',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    window.location.reload();
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit();
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Quiz</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="question" className="form-label">Title</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="question"
                                        name="question"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Ans 1</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans1"
                                        name="ans1"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Ans 2</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans2"
                                        name="ans2"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Ans 3</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans3"
                                        name="ans3"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Ans 4</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="ans4"
                                        name="ans4"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Right Answer</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="right_ans"
                                        name="right_ans"
                                        onChange={handleChange}
                                        rows="3"
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
