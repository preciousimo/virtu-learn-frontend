import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function EditQuiz() {
    useEffect(() => {
        document.title = 'Edit Quiz';
    }, []);

    const [quizData, setQuizData] = useState({
        title: '',
        detail: '',
    });

    const teacherId = localStorage.getItem('teacherId');
    const { quiz_id } = useParams();

    useEffect(() => {
        const fetchQuizDetail = async () => {
            try {
                const response = await axios.get(`${baseUrl}/teacher-quiz-detail/${quiz_id}`);
                const { title, detail } = response.data;
                setQuizData({ title, detail });
            } catch (error) {
                console.error('Error fetching quiz detail:', error);
            }
        };

        fetchQuizDetail();
    }, [quiz_id]);

    const handleChange = (e) => {
        setQuizData({
            ...quizData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = async () => {
        const formData = new FormData();
        formData.append('teacher', teacherId);
        formData.append('title', quizData.title);
        formData.append('detail', quizData.detail);

        try {
            const response = await axios.put(`${baseUrl}/teacher-quiz-detail/${quiz_id}`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                Swal.fire({
                    title: 'Data has been updated',
                    icon: 'success',
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            console.error('Error updating quiz:', error);
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
                        <h5 className='card-header'>Edit Quiz</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='title' className='form-label'>
                                        Title
                                    </label>
                                    <input
                                        type='text'
                                        value={quizData.title}
                                        className='form-control'
                                        id='title'
                                        name='title'
                                        onChange={handleChange}
                                        rows='3'
                                    />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='detail' className='form-label'>
                                        Detail
                                    </label>
                                    <textarea
                                        value={quizData.detail}
                                        className='form-control'
                                        id='detail'
                                        name='detail'
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type='submit' className='btn btn-secondary'>
                                    Edit
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditQuiz;
