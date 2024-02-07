import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function CheckQuizInCourse(props) {
    const [quizData, setQuizData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        const fetchQuizAssignStatus = async () => {
            try {
                const response = await axios.get(`${baseUrl}/fetch-quiz-assign-status/${props.quiz}/${props.course}`);
                setQuizData(response.data);
            } catch (error) {
                console.error('Error fetching quiz assignment status:', error);
            }
        };

        fetchQuizAssignStatus();
    }, [props.quiz, props.course]);

    const assignQuiz = async (quiz_id) => {
        const formData = new FormData();
        formData.append('teacher', teacherId);
        formData.append('course', props.course);
        formData.append('quiz', props.quiz);

        try {
            const response = await axios.post(`${baseUrl}/quiz-assign-course/`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            });
            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: 'Quiz is successfully assigned in the course',
                    icon: 'success',
                    toast: true,
                    timer: 5000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                }).then(() => {
                    window.location.reload(); // Reload page after showing success message
                });
            }
        } catch (error) {
            console.error('Error assigning quiz:', error);
        }
    };

    return (
        <td>
            {quizData.bool === false && (
                <button onClick={() => assignQuiz(props.quiz)} className='btn btn-sm btn-success ms-2'>Assign Quiz</button>
            )}
            {quizData.bool === true && (
                <>
                    <span className='btn btn-sm btn-secondary'>Assigned</span> &nbsp;
                    <Link className='btn btn-sm btn-info' to={`/attempted-students/${props.quiz}`}>Attempted Students</Link>
                </>
            )}
        </td>
    );
}

export default CheckQuizInCourse;
