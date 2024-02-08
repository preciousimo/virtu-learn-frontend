import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function QuizResult(props) {
    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/fetch-quiz-result/${props.quiz}/${props.student}`)
                .then((res) => {
                    setResultData(res.data);
                });
        } catch (err) {
            console.log(err);
        }

    }, []);

    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Total Questions</td>
                                <td>{resultData.total_questions }</td>
                            </tr>
                            <tr>
                                <td>Attempted Questions</td>
                                <td>{resultData.total_attempted_questions}</td>
                            </tr>
                            <tr>
                                <td>Correct Answered</td>
                                <td>{resultData.total_correct_questions}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default QuizResult;
