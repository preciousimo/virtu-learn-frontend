import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function MyTeachers() {
    const [teacherData, setTeacherData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        document.title = 'My Teachers'
        axios.get(`${baseUrl}/fetch-my-teachers/${studentId}`)
            .then((res) => {
                setTeacherData(res.data);
            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const [msgData, setMsgData] = useState({
        msg_text: '',
    });

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        setMsgData({
            ...msgData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = (teacherId) => {
        const _formData = new FormData();
        _formData.append('msg_text', msgData.msg_text);
        _formData.append('msg_from', 'teacher');

        axios.post(`${baseUrl}/send-message/${studentId}/${teacherId}`, _formData)
            .then((res) => {
                if (res.data.bool === true) {
                    setMsgData({ msg_text: '' });
                    setSuccessMsg(res.data.msg);
                    setErrorMsg('');
                } else {
                    setErrorMsg(res.data.msg);
                    setSuccessMsg('');
                }
            }).catch((err) => {
                console.error(err);
                setErrorMsg('An error occurred. Please try again.');
            });
    };


    const handleSubmit = (e, teacherId) => {
        e.preventDefault();
        formSubmit(teacherId);
    };

    const msgList = {
        height: '500px',
        overflow: 'auto',
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                            My Teachers
                        </h5>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {teacherData.map((row, index) => (
                                        <tr>
                                            <td style={{ whiteSpace: 'nowrap' }}><Link to={`/teacher-detail/${row.teacher.id}`}>{row.teacher.name}</Link></td>
                                            <td><i className='bi bi-chat-fill'></i></td>
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

export default MyTeachers