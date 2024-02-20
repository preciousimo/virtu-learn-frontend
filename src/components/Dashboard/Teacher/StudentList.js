import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function StudentList() {
    useEffect(() => {
        document.title = 'Enrolled Students'
    }, [])

    const [studentData, setStudentData] = useState([]);
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/fetch-all-enrolled-students/${teacherId}`)
                .then((res) => {
                    setStudentData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

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
                        <h5 className='card-header'>All Student List</h5>
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
                                        <tr>
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
                                                                        <span className='ms-5 btn btn-sm btn-secondary' title='Refresh'><i className="bi bi-bootstrap-reboot"></i></span>
                                                                    </h1>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className='row'>
                                                                        <div className='col-md-8 mb-2 col-12 border-end' style={msgList}>
                                                                            <div className='row'>
                                                                                <div className='col-5'>
                                                                                    <div className="alert alert-primary mb-1">
                                                                                        <p>A simple primary alert—check it out!</p>
                                                                                    </div>
                                                                                    <small className='text-muted'>21-02-2024 10:34</small>
                                                                                </div>
                                                                            </div>
                                                                            <div className='row'>
                                                                                <div className='col-5 offset-7'>
                                                                                    <div className="alert alert-primary mb-1">
                                                                                        <p>A simple primary alert—check it out!</p>
                                                                                    </div>
                                                                                    <small className='text-muted'>21-02-2024 10:34</small>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='col-md-4 col-12'>
                                                                            <form>
                                                                                <div className="mb-3">
                                                                                    <label for="exampleInputEmail1" className="form-label">Message</label>
                                                                                    <textarea className='form-control' rows='7'></textarea>
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