import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function AllQuiz() {
    useEffect(() => {
        document.title = 'Teacher Courses'
    }, [])

    const [quizData, setQuizData]=useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
            axios.get(baseUrl+'/teacher-quiz/'+teacherId)
            .then((res) => {
                setQuizData(res.data);
            });
        } catch (err) {
            console.log(err);
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
                        <h5 className='card-header'>All Quiz</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Questions</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quizData.map((quiz, index) => (
                                    <tr>
                                        <td>
                                            <Link to={`/all-questions/${quiz.id}`}>{quiz.title}</Link>
                                        </td>
                                        <td><Link to='#'>123</Link></td>
                                        <td>
                                            <Link className='btn btn-sm btn-success ms-2' to={`/add-quiz-question/${quiz.id}`}>Add Question</Link>
                                            <Link className='btn btn-sm btn-warning ms-2' to='#'>Edit</Link>
                                            <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                                        </td>
                                    </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AllQuiz