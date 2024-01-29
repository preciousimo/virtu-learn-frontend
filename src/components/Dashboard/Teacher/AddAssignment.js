import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function AddAssignment() {
    useEffect(() => {
        document.title = 'Add Assignment';
    }, []);

    const [assignmentData, setAssignmentData] = useState({
        title: '',
        detail: '',
    });

    const handleChange = (e) => {
        setAssignmentData({
            ...assignmentData,
            [e.target.name]: e.target.value,
        });
    };

    const { teacher_id } = useParams();
    const { student_id } = useParams();

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('student', student_id);
        _formData.append('teacher', teacher_id);
        _formData.append('title', assignmentData.title);
        _formData.append('detail', assignmentData.detail);

        try {
            axios.post(`${baseUrl}/student-assignment/${teacher_id}/${student_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'Assignment has been added',
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmit();
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Assignment</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        onChange={handleChange}
                                        rows="3"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="detail" className="form-label">Detail</label>
                                    <textarea
                                        className="form-control"
                                        id="detail"
                                        name="detail"
                                        value={assignmentData.detail}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type='submit' className='btn btn-secondary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AddAssignment;
