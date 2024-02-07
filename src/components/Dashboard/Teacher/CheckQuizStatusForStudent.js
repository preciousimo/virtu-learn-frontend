import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function CheckQuizStatusForStudent(props) {
    const [quizData, setQuizData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        const fetchQuizAttemptStatus = async () => {
            try {
                const response = await axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`);
                setQuizData(response.data);
            } catch (error) {
                console.error('Error fetching quiz attempt status:', error);
            }
        };

        fetchQuizAttemptStatus();
    }, [props.quiz, props.student]);

    return (
        <td>
            {quizData.bool === true && (
                <span className='text-success'>Attempted</span>
            )}
            {quizData.bool === false && (
                <Link to={`/take-quiz/${props.quiz}`} className='btn btn-sm btn-success ms-2'>Take Quiz</Link>
            )}
        </td>
    );
}

export default CheckQuizStatusForStudent;
