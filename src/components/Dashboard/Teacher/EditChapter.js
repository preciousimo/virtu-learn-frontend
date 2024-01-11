import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'


const baseUrl = 'http://127.0.0.1:8000/api';

function EditChapter() {
    useEffect(() => {
        document.title = 'Edit Chapter';
    }, []);

    const [chapterData, setChapterData] = useState({
        course: '',
        title: '',
        description: '',
        prev_video: '',
        video: '',
        remarks: '',
    });

    const handleChange = (e) => {
        setChapterData({
            ...chapterData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setChapterData({
            ...chapterData,
            [e.target.name]: e.target.files[0],
        });
    };

    const { chapter_id } = useParams();

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', chapterData.course);
        _formData.append('title', chapterData.title);
        _formData.append('description', chapterData.description);
        if (chapterData.video != '') {
            _formData.append('video', chapterData.video, chapterData.video.name);
        }

        _formData.append('remarks', chapterData.remarks);

        try {
            axios.put(`${baseUrl}/chapter/${chapter_id}`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status == 200) {
                    Swal.fire({
                        title: 'Data has been updated',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/chapter/${chapter_id}`)
                .then((res) => {
                    setChapterData({
                        course: res.data.course,
                        title: res.data.title,
                        description: res.data.description,
                        prev_video: res.data.video,
                        remarks: res.data.remarks,
                        video: ''
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }, [chapter_id]);

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
                        <h5 className='card-header'>Update Chapter</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type='text'
                                        defaultValue={chapterData.title}
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
                                        value={chapterData.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="form-label">Video</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="video"
                                        name="video"
                                        onChange={handleFileChange}
                                    />
                                    <video width='780' height='300' className='mt-2' controls>
                                        {chapterData.prev_video && (
                                            <>
                                                <source src={chapterData.prev_video} type="video/mp4" />
                                                <source src={chapterData.prev_video} type="video/mov" />
                                            </>
                                        )}
                                    </video>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="remarks" className="form-label">Remarks</label>
                                    <textarea
                                        className="form-control"
                                        id="remarks"
                                        name="remarks"
                                        value={chapterData.remarks}
                                        onChange={handleChange}
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button type='submit' className='btn btn-secondary'>Edit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EditChapter;
