import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function MessageList(props) {
    const [msgData, setMsgData] = useState([]);

    useEffect(() => {
        fetchMsgs();
    }, []);

    const fetchMsgs = () => {
        try {
            axios.get(`${baseUrl}/get-messages/${props.teacher_id}/${props.student_id}`)
                .then((res) => {
                    setMsgData(res.data);
                    const objDiv = document.getElementById("msgList");
                    objDiv.scrollTop = objDiv.scrollHeight;
                });
        } catch (error) {
            console.log(error);
        }
    };

    const msgList = {
        height: '500px',
        overflow: 'auto',
    }


    return (
        <>
            <p><span className='btn btn-sm btn-secondary' onClick={fetchMsgs} title='Refresh'><i className="bi bi-bootstrap-reboot"></i></span></p>
            <div style={msgList} id='msgList'>
                {msgData.map((row, index) =>
                    <div className='row mb-4' key={index}>
                        {row.msg_from != 'student' &&
                            <div className='col-5'>
                                <div className="alert alert-primary mb-1">
                                    {row.msg_text}
                                </div>
                                <small className='text-muted'>{row.msg_time}</small>
                            </div>
                        }
                        {row.msg_from == 'student' &&
                            <div className='col-5 offset-7'>
                                <div className="alert alert-success mb-1">
                                    {row.msg_text}
                                </div>
                                <small className='text-muted'>{row.msg_time}</small>
                            </div>
                        }
                    </div>
                )}
            </div>
        </>
    );
}

export default MessageList;
