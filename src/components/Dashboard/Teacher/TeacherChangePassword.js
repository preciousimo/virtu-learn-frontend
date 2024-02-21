import { useState, useEffect } from 'react'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import config from '../../../config/config';


function TeacherChangePassword() {
    useEffect(() => {
        document.title = 'Change Password'
    }, [])

    const [teacherData, setTeacherData] = useState({
        'password': '',
    });
    const teacherId = localStorage.getItem('teacherId');

    // Change handler
    const handleChange = (e) => {
        setTeacherData({
            ...teacherData,
            [e.target.name]: e.target.value
        })
    }

    // Submit handler
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('password', teacherData.password);

        try {
            axios.post(`${config.baseUrl}/teacher/change-password/${teacherId}/`, teacherFormData)
            .then((res) => {
                window.location.href = '/teacher-logout';
            });
        } catch (err) {
            console.log(err);
            setTeacherData({ 'status': 'error' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm();
    };

    const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
    if (teacherLoginStatus != 'true') {
        window.location.href = '/teacher-login';
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Change Password</h5>
                        <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">New Password</label>
                                <div className="col-sm-10">
                                    <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" id="inputPassword" />
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

export default TeacherChangePassword