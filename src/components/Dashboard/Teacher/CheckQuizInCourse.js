import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function CheckQuizInCourse(props) {

    const [quizData, setQuizData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        // Fetch quiz data
        try {
            axios.get(`${baseUrl}/fetch-quiz-assign-status/${props.quiz}/${props.course}`)
                .then((res) => {
                    setQuizData(res.data);
                });
        } catch (err) {
            console.log(err);
        }

    }, []);

    const assignQuiz = (quiz_id) => {
        const _formData = new FormData();
        _formData.append('teacher', teacherId);
        _formData.append('course', props.course);
        _formData.append('quiz', props.quiz);

        try {
            axios.post(`${baseUrl}/quiz-assign-course/`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'Quiz is successfully assigned in the course',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                } window.location.reload()
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <td>
            {quizData.bool == false &&
                <button onClick={() => assignQuiz(props.quiz)} className='btn btn-sm btn-success ms-2'>Assign Quiz</button>
            }
            {quizData.bool == true &&
                <span className='text-success'>Assigned</span>
            }
        </td>
    );
}

export default CheckQuizInCourse;
