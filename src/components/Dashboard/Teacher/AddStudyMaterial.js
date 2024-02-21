import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
import config from '../../../config/config';


function AddStudyMaterial() {
    useEffect(() => {
        document.title = 'Add Chapter';
    }, []);

    const [studyData, setStudyData] = useState({
        title: '',
        description: '',
        upload: '',
        remarks: '',
    });

    const handleChange = (e) => {
        setStudyData({
            ...studyData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        window.URL = window.URL || window.webkitURL;
        var upload = document.createElement('upload');
        upload.src = URL.createObjectURL(e.target.files[0]);
        
        setStudyData({
            ...studyData,
            [e.target.name]: e.target.files[0],
        });
    };

    const { course_id } = useParams();

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('title', studyData.title);
        _formData.append('description', studyData.description);
        _formData.append('upload', studyData.upload, studyData.upload.name);
        _formData.append('remarks', studyData.remarks);

        try {
            axios.post(`${config.baseUrl}/study-materials/${course_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'Data has been added',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
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
                        <h5 className='card-header'>Add Study Material</h5>
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
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={studyData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="upload" className="form-label">Upload</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="upload"
                                        name="upload"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="remarks" className="form-label">Remarks</label>
                                    <textarea
                                        className="form-control"
                                        id="remarks"
                                        name="remarks"
                                        value={studyData.remarks}
                                        onChange={handleChange}
                                        rows="3"
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

export default AddStudyMaterial;
