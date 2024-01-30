import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function StudentAssignments() {
    useEffect(() => {
        document.title = 'My Assignments'
    }, [])

    const [assignmentData, setAssignmentData] = useState([]);
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/my-assignments/${studentId}`)
                .then((res) => {
                    setAssignmentData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

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
                                    </tr>
                                </thead>
                                <tbody>
                                    {assignmentData.map((row, index) => (
                                        <tr>
                                            <td>{row.title}</td>
                                            <td>{row.detail}</td>
                                            <td><Link to={`/teacher-detail/${row.teacher.id}`}>{row.teacher.name}</Link></td>
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

export default StudentAssignments