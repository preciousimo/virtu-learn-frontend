import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import config from '../../../config/config';


function StudentAssignments() {
    useEffect(() => {
        document.title = 'My Assignments'
    }, [])

    const [assignmentData, setAssignmentData] = useState([]);
    const [assignmentStatus, setAssignmentStatus] = useState('');
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/my-assignments/${studentId}`)
                .then((res) => {
                    setAssignmentData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    const markAsDone = (assignment_id, title, detail, student, teacher) => {
        const _formData = new FormData();
        _formData.append('student_status', true);
        _formData.append('title', title);
        _formData.append('detail', detail);
        _formData.append('student', student);
        _formData.append('teacher', teacher);

        try {
            axios.put(`${config.baseUrl}/update-assignment/${assignment_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'You have successfully completed this assignment',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    window.location.reload();
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>My Assignments</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Detail</th>
                                        <th>Teacher</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignmentData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.title}</td>
                                            <td>{row.detail}</td>
                                            <td><Link to={`/teacher-detail/${row.teacher.id}`}>{row.teacher.name}</Link></td>
                                            <td>
                                                {row.student_status === false &&
                                                    <button onClick={() => markAsDone(row.id, row.title, row.detail, row.student.id, row.teacher.id)} className='btn btn-success btn-sm'>Mark as Done</button>
                                                }
                                                {row.student_status === true &&
                                                    <span className='badge bg-primary'>Completed</span>
                                                }
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default StudentAssignments