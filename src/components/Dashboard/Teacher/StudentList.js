import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import MessageList from './MessageList'
import axios from 'axios'
import config from '../../../config/config';


function StudentList() {
    const [studentData, setStudentData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        document.title = 'Enrolled Students'
        axios.get(`${config.baseUrl}/fetch-all-enrolled-students/${teacherId}`)
            .then((res) => {
                setStudentData(res.data);
            }).catch((err) => {
                console.log(err);
            });

    }, []);

    const [groupMsgData, setGroupMsgData] = useState({
        msg_text: '',
    });

    const [msgData, setMsgData] = useState({
        msg_text: '',
    });

    const [groupSuccessMsg, setGroupSuccessMsg] = useState('');
    const [groupErrorMsg, setGroupErrorMsg] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const groupHandleChange = (e) => {
        setGroupMsgData({
            ...groupMsgData,
            [e.target.name]: e.target.value,
        });
    };

    const handleChange = (e) => {
        setMsgData({
            ...msgData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = (student_id) => {
        const _formData = new FormData();
        _formData.append('msg_text', msgData.msg_text);
        _formData.append('msg_from', 'teacher');

        axios.post(`${config.baseUrl}/send-message/${teacherId}/${student_id}`, _formData)
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


    const groupFormSubmit = (e) => {
        e.preventDefault();
        const _formData = new FormData();
        _formData.append('msg_text', groupMsgData.msg_text);
        _formData.append('msg_from', 'teacher');

        axios.post(`${config.baseUrl}/send-group-message/${teacherId}`, _formData)
            .then((res) => {
                if (res.data.bool === true) {
                    setGroupMsgData({ msg_text: '' });
                    setGroupSuccessMsg(res.data.msg);
                    setGroupErrorMsg('');
                } else {
                    setGroupErrorMsg(res.data.msg);
                    setGroupSuccessMsg('');
                }
            }).catch((err) => {
                console.error(err);
                setGroupErrorMsg('An error occurred. Please try again.');
            });
    };

    const handleSubmit = (e, studentId) => {
        e.preventDefault();
        formSubmit(studentId);
    };

    const msgList = {
        height: '500px',
        overflow: 'auto',
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>
                            All Student List
                            <button type='button' className='btn btn-primary float-end btn-sm' data-bs-toggle='modal' data-bs-target='#groupMsgModal'>
                                Send Message
                            </button>
                        </h5>
                        <div className="modal fade" id="groupMsgModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Send Message to All Students</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {groupSuccessMsg && <p className="text-success">{groupSuccessMsg}</p>}
                                        {groupErrorMsg && <p className="text-danger">{groupErrorMsg}</p>}
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                                <textarea className='form-control' value={groupMsgData.msg_text} name='msg_text' onChange={groupHandleChange} rows='7'></textarea>
                                            </div>
                                            <button type="button" onClick={groupFormSubmit} className="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Interested Categories</th>
                                        <th>Assignment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.student.name}</td>
                                            <td>{row.student.email}</td>
                                            <td>{row.student.username}</td>
                                            <td>{row.student.interested_categories}</td>
                                            <td style={{ whiteSpace: 'nowrap' }}>
                                                <div className="btn-group">
                                                    <Link to={`/show-assignment/${teacherId}/${row.student.id}`} className='btn btn-sm btn-warning mb-1'>Assignments</Link>
                                                    <Link to={`/add-assignment/${teacherId}/${row.student.id}`} className='btn btn-sm btn-success mb-1'>Add Assignment</Link>
                                                    <button className='btn btn-sm btn-dark mb-1' data-bs-toggle="modal" data-bs-target={`#msgModal${index}`}><i className="bi bi-chat-fill"></i></button>

                                                    <div className="modal fade" id={`msgModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-xl modal-dialog-scrollable ">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                        <span className='text-danger'>{row.student.name}</span>
                                                                    </h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className='row'>
                                                                        <div className='col-md-8 mb-2 col-12 border-end' style={msgList}>
                                                                            <MessageList teacher_id={teacherId} student_id={row.student.id} />
                                                                        </div>
                                                                        <div className='col-md-4 col-12'>
                                                                            {successMsg && <p className="text-success">{successMsg}</p>}
                                                                            {errorMsg && <p className="text-danger">{errorMsg}</p>}
                                                                            <form onSubmit={(e) => handleSubmit(e, row.student.id)}>
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

export default StudentList