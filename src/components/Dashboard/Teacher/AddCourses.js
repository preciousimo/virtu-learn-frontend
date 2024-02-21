import { useState, useEffect } from 'react'
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import config from '../../../config/config';


function AddCourses() {
    useEffect(() => {
        document.title = 'Add Courses';
    }, []);

    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: '',
        techs: '',
    });

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/category/`).then((res) => {
                setCats(res.data);
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
        const teacherId = localStorage.getItem('teacherId')
        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('teacher', teacherId);
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formData.append('techs', courseData.techs);

        try {
            axios.post(`${config.baseUrl}/course/`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                window.location.href = '/add-courses';
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
                        <h5 className='card-header'>Add Course</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select name='category' className='form-control' onChange={handleChange}>
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
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="technologies" className="form-label">Technologies</label>
                                    <textarea
                                        className="form-control"
                                        id="technologies"
                                        name="techs"
                                        placeholder='Python, JavaScript,...'
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

export default AddCourses;
