import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherProfileSetting() {
    useEffect(() => {
        document.title = 'Profile Setting'
    }, [])

    const [teacherData, setTeacherData] = useState({
        'name': '',
        'email': '',
        'qualification': '',
        'mobile_no': '',
        'skills': '',
        'profile_img': '',
        'p_img': '',
        'status': '',
    });

    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        // Fetch current teacher data
        try {
            axios.get(`${baseUrl}/teacher/${teacherId}`)
                .then((res) => {
                    setTeacherData({
                        name: res.data.name,
                        email: res.data.email,
                        qualification: res.data.qualification,
                        mobile_no: res.data.mobile_no,
                        skills: res.data.skills,
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
        setTeacherData({
            ...teacherData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        setTeacherData({
            ...teacherData,
            [e.target.name]: e.target.files[0],
        });
    };

    // Submit handler
    const submitForm = () => {
        const teacherFormData = new FormData();
        teacherFormData.append('name', teacherData.name);
        teacherFormData.append('email', teacherData.email);
        teacherFormData.append('qualification', teacherData.qualification);
        teacherFormData.append('mobile_no', teacherData.mobile_no);
        teacherFormData.append('skills', teacherData.skills);

        if (teacherData.p_img != '') {
            teacherFormData.append('profile_img', teacherData.p_img, teacherData.p_img.name);
        }

        try {
            axios.put(`${baseUrl}/teacher/${teacherId}/`, teacherFormData, {
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
                })
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
                        <h5 className='card-header'>Profile Setting</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 row">
                                    <label for="inputName" className="col-sm-2 col-form-label">Full Name</label>
                                    <div className="col-sm-10">
                                        <input value={teacherData.name} onChange={handleChange} name='name' type="text" className="form-control" id="inputName" />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control" id="inputEmail" />
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
                                        {teacherData.profile_img &&
                                            <img src={teacherData.profile_img} height='200' width='200' alt={teacherData.name} />
                                        }
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputQualification" className="col-sm-2 col-form-label">Qualification</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            value={teacherData.qualification}
                                            onChange={handleChange}
                                            name='qualification'
                                            className="form-control"
                                            id="inputQualification"
                                        ></textarea>
                                        <div id='emailHelp' className='form-text'>BSc, MSc, PhD, etc.</div>
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            value={teacherData.skills}
                                            onChange={handleChange}
                                            name='skills'
                                            className="form-control"
                                            id="inputSkills"
                                        ></textarea>
                                        <div id='emailHelp' className='form-text'>Python, JavaScript, Mathematics, etc.</div>
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

export default TeacherProfileSetting