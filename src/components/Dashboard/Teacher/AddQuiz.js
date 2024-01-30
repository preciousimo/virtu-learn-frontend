import { useState, useEffect } from 'react'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function AddQuiz() {
    useEffect(() => {
        document.title = 'Add Quiz';
    }, []);

    const [quizData, setQuizData] = useState({
        title: '',
        detail: '',
    });

    const handleChange = (e) => {
        setQuizData({
            ...quizData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = () => {
        const teacherId = localStorage.getItem('teacherId')
        const _formData = new FormData();
        _formData.append('teacher', teacherId);
        _formData.append('title', quizData.title);
        _formData.append('detail', quizData.detail);

        try {
            axios.post(`${baseUrl}/quiz/`, _formData, {
            }).then((res) => {
                window.location.href = '/add-quiz';
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
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail" className="form-label">Detail</label>
                                    <textarea
                                        className="form-control"
                                        id="detail"
                                        name="detail"
                                        onChange={handleChange}
                                    ></textarea>
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

export default AddQuiz;
