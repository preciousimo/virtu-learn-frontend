import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import MessageList from './MessageList'
import axios from 'axios'
import config from '../../../config/config';

function MyTeachers() {
    const [teacherData, setTeacherData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        document.title = 'My Teachers'
        axios.get(`${config.baseUrl}/fetch-my-teachers/${studentId}`)
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

    const formSubmit = (teacher_id) => {
        const _formData = new FormData();
        _formData.append('msg_text', msgData.msg_text);
        _formData.append('msg_from', 'student');

        axios.post(`${config.baseUrl}/send-message/${teacher_id}/${studentId}`, _formData)
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
                                            <td>
                                                <button className='btn btn-sm btn-dark mb-1' data-bs-toggle="modal" data-bs-target={`#msgModal${index}`}><i className="bi bi-chat-fill"></i></button>
                                                <div className="modal fade" id={`msgModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-xl modal-dialog-scrollable ">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                    <span className='text-danger'>{row.teacher.name}</span>
                                                                </h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className='row'>
                                                                    <div className='col-md-8 mb-2 col-12 border-end' style={msgList}>
                                                                        <MessageList teacher_id={row.teacher.id} student_id={studentId} />
                                                                    </div>
                                                                    <div className='col-md-4 col-12'>
                                                                        {successMsg && <p className="text-success">{successMsg}</p>}
                                                                        {errorMsg && <p className="text-danger">{errorMsg}</p>}
                                                                        <form onSubmit={(e) => handleSubmit(e, row.teacher.id)}>
                                                                            <div className="mb-3">
                                                                                <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                                                                <textarea className='form-control' value={msgData.msg_text} name='msg_text' onChange={handleChange} rows='7'></textarea>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default MyTeachers