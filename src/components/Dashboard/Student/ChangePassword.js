import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function ChangePassword() {
    useEffect(() => {
        document.title = 'Change Password'
    }, [])

    const [studentData, setStudentData] = useState({
        'password': '',
    });
    const studentId = localStorage.getItem('studentId');

    // Change handler
    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }

    // Submit handler
    const submitForm = () => {
        const studentFormData = new FormData();
        studentFormData.append('password', studentData.password);

        try {
            axios.post(`${baseUrl}/student/change-password/${studentId}/`, studentFormData)
            .then((res) => {
                window.location.href = '/logout';
            });
        } catch (err) {
            console.log(err);
            setStudentData({ 'status': 'error' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    const studentLoginStatus = localStorage.getItem('studentLoginStatus')
    if (studentLoginStatus != 'true') {
        window.location.href = '/login';
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                    <input value={studentData.password} onChange={handleChange} name='password' type="password" className="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <hr />
                            <button className='btn btn-secondary'>Update</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ChangePassword