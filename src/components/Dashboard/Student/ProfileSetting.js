import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function ProfileSetting() {
    useEffect(() => {
        document.title = 'Profile Setting'
    }, [])

    const [studentData, setStudentData] = useState({
        'name': '',
        'email': '',
        'username': '',
        'interested_categories': '',
        'profile_img': '',
        'p_img': '',
    });

    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        // Fetch current teacher data
        try {
            axios.get(`${baseUrl}/student/${studentId}`)
                .then((res) => {
                    setStudentData({
                        name: res.data.name,
                        email: res.data.email,
                        username: res.data.username,
                        interested_categories: res.data.interested_categories,
                        profile_img: res.data.profile_img,
                        p_img: '',
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    // Change handler
    const handleChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.files[0],
        });
    };

    // Submit handler
    const submitForm = () => {
        const studentFormData = new FormData();
        studentFormData.append('name', studentData.name);
        studentFormData.append('email', studentData.email);
        studentFormData.append('username', studentData.username);
        studentFormData.append('interested_categories', studentData.interested_categories);

        if (studentData.p_img != '') {
            studentFormData.append('profile_img', studentData.p_img, studentData.p_img.name);
        }

        try {
            axios.put(`${baseUrl}/student/${studentId}/`, studentFormData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                Swal.fire({
                    title: 'Data has been updated',
                    icon: 'success',
                    toast: true,
                    timer: 3000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false
                });
                window.location.reload();
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
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 row">
                                    <label for="inputName" className="col-sm-2 col-form-label">Full Name</label>
                                    <div className="col-sm-10">
                                        <input value={studentData.name} onChange={handleChange} name='name' type="text" className="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input value={studentData.email} onChange={handleChange} name='email' type="email" className="form-control" id="inputEmail" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
                                    <div className="col-sm-10">
                                        <input value={studentData.username} onChange={handleChange} name='username' type="text" className="form-control" id="inputUsername" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputPicture" className="col-sm-2 col-form-label">Profile Picture</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="inputPicture"
                                            name="p_img"
                                            onChange={handleFileChange}
                                        />
                                        {studentData.profile_img &&
                                            <img src={studentData.profile_img} height='200' width='200' alt={studentData.name} />
                                        }
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputInterestedCategories" className="col-sm-2 col-form-label">Interested Caategories</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            value={studentData.interested_categories}
                                            onChange={handleChange}
                                            name='interested_categories'
                                            className="form-control"
                                            id="inputInterestedCategories"
                                        ></textarea>
                                        <div id='inputInterestedCategories' className='form-text'>Python, JavaScript, Mathematics, etc.</div>
                                    </div>
                                </div>
                                <hr />
                                <button type='submit' className='btn btn-secondary'>Update</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfileSetting