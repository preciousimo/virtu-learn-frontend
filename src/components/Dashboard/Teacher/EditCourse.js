import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function EditCourse() {
    useEffect(() => {
        document.title = 'Edit Course';
    }, []);

    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        prev_img: '',
        f_img: '',
        techs: '',
    });

    const { course_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/category/`).then((res) => {
                setCats(res.data);
            });
        } catch (err) {
            console.log(err);
        }

        // Fetch current data
        try {
            axios.get(`${baseUrl}/teacher-course-detail/${course_id}`)
                .then((res) => {
                    setCourseData({
                        category: res.data.category,
                        title: res.data.title,
                        description: res.data.description,
                        prev_img: res.data.featured_img,
                        f_img:'',
                        techs: res.data.techs,
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setCourseData({
            ...courseData,
            [e.target.name]: e.target.files[0],
        });
    };

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', 1);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        if(courseData.f_img!=''){
            _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        }
        _formData.append('techs', courseData.techs);

        try {
            axios.put(`${baseUrl}/teacher-course-detail/${course_id}`, _formData, {
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
                        <h5 className='card-header'>Edit Course</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select name='category' value={courseData.category} className='form-control' onChange={handleChange}>
                                        {cats.map((category, index) => (
                                            <option key={index} value={category.id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type='text'
                                        value={courseData.title}
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
                                        value={courseData.description}
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="f_img" className="form-label">Featured Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="f_img"
                                        name="f_img"
                                        onChange={handleFileChange}
                                    />
                                    {courseData.prev_img &&
                                        <img src={courseData.prev_img} height='200' width='200'/>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="technologies" className="form-label">Technologies</label>
                                    <textarea
                                        className="form-control"
                                        id="technologies"
                                        name="techs"
                                        value={courseData.techs}
                                        placeholder='Python, JavaScript,...'
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

export default EditCourse;
