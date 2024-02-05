import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function CheckQuizStatusForStudent(props) {

    const [quizData, setQuizData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        // Fetch quiz data
        try {
            axios.get(`${baseUrl}/fetch-quiz-attempt-status/${props.quiz}/${props.student}`)
                .then((res) => {
                    setQuizData(res.data);
                });
        } catch (err) {
            console.log(err);
        }

    }, []);

    return (
        <td>
            {quizData.bool == true &&
                <span className='text-success'>Attempted</span>
            }
            {quizData.bool == false &&
                <Link to={`/take-quiz/${props.quiz}`} className='btn btn-sm btn-success ms-2'>Take Quiz</Link>
            }
        </td>
    );
}

export default CheckQuizStatusForStudent;
