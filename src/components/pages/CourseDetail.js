import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'


const siteUrl = 'https://myfundz.s3.amazonaws.com';
const baseUrl = 'http://127.0.0.1:8000/api';

function CourseDetail() {
    useEffect(() => {
        document.title = 'Course Detail'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const [chapterData, setChapterData] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [relatedCourseData, setRelatedCourseData] = useState([]);
    const [techListData, setTechListData] = useState([]);
    const [studentLoginStatus, setStudentLoginStatus] = useState([]);
    const [enrollStatus, setEnrollStatus] = useState([]);
    const [ratingStatus, setRatingStatus] = useState([]);
    const [courseViews, setCourseViews] = useState([]);
    const [favouriteStatus, setFavouriteStatus] = useState([]);
    const [avgRating, setAdvRating] = useState(0);
    let { course_id } = useParams();
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
        // Fetch Courses
        try {
            axios.get(`${baseUrl}/course/${course_id}`)
                .then((res) => {
                    setCourseData(res.data);
                    setChapterData(res.data.course_chapters);
                    setTeacherData(res.data.teacher);
                    setRelatedCourseData(JSON.parse(res.data.related_videos));
                    setTechListData(res.data.tech_list);
                    if (res.data.course_rating != '' && res.data.course_rating != null) {
                        setAdvRating(res.data.course_rating)
                    }
                });
                axios.get(`${baseUrl}/update-view/${course_id}`)
                .then((res) => {
                    setCourseViews(res.data.views)
                });
        } catch (err) {
            console.error(err);
        }

        // Fetch enroll status
        try {
            axios.get(`${baseUrl}/fetch-enroll-status/${studentId}/${course_id}`)
                .then((res) => {
                    if (res.data.bool == true) {
                        setEnrollStatus('success');
                    }
                });
        } catch (err) {
            console.error(err);
        }

        // Fetch rating status
        try {
            axios.get(`${baseUrl}/fetch-rating-status/${studentId}/${course_id}`)
                .then((res) => {
                    if (res.data.bool == true) {
                        setRatingStatus('success');
                    }
                });
        } catch (err) {
            console.error(err);
        }

        // Fetch favourite status
        try {
            axios.get(`${baseUrl}/fetch-favourite-status/${studentId}/${course_id}`)
                .then((res) => {
                    if (res.data.bool == true) {
                        setFavouriteStatus('success');
                    } else{
                        setFavouriteStatus('');
                    }
                });
        } catch (err) {
            console.error(err);
        }

        const studentLoginStatus = localStorage.getItem('studentLoginStatus');
        if (studentLoginStatus === 'true') {
            setStudentLoginStatus('success');
        }
    }, [course_id]);

    const enrollCourse = () => {
        const studentId = localStorage.getItem('studentId');
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', studentId);

        try {
            axios.post(`${baseUrl}/student-enroll-course/`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'You have successfully enrolled in thus course',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setEnrollStatus('success');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // Mark as favourite course
    const markAsFavourite = () => {
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', studentId);
        _formData.append('status', true);

        try {
            axios.post(`${baseUrl}/student-add-favourite-course/`, _formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'This course has been added in your wish list',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setFavouriteStatus('success');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // Remove from favourite course
    const removeFavourite = () => {
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', studentId);
        _formData.append('status', true);

        try {
            axios.post(`${baseUrl}/student-remove-favourite-course/${course_id}/${studentId}`, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then((res) => {
                if (res.status === 200 || res.status === 201) {
                    Swal.fire({
                        title: 'This course has been removed from your wish list',
                        icon: 'success',
                        toast: true,
                        timer: 5000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    setFavouriteStatus('');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // Add Rating
    const [ratingData, setRatingData] = useState({
        rating: '',
        reviews: '',
    });

    const handleChange = (e) => {
        setRatingData({
            ...ratingData,
            [e.target.name]: e.target.value,
        });
    };

    const formSubmit = () => {
        const _formData = new FormData();
        _formData.append('course', course_id);
        _formData.append('student', studentId);
        _formData.append('rating', ratingData.rating);
        _formData.append('reviews', ratingData.reviews);

        try {
            axios.post(`${baseUrl}/course-rating/${course_id}`, _formData,)
                .then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        Swal.fire({
                            title: 'Rating has been saved',
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
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src={courseData.featured_img} className='card-img-top' alt={courseData.title} />
                </div>
                <div className='col-8'>
                    <h3>{courseData.title}</h3>
                    <p>{courseData.description}</p>
                    <p className='fw-bold'>Subject By: {courseData.teacher ? <Link to={`/teacher-detail/${courseData.teacher.id}`}>{courseData.teacher.name}</Link> : 'Unknown Teacher'}</p>
                    {/* <p className='fw-bold'>Subject By: <Link to=''>{teacherData.name}</Link></p> */}
                    <p className='fw-bold'>Technologies:&nbsp;
                        {Array.isArray(techListData) && techListData.map((tech, index) => (
                            <Link to={`/category/${tech.trim()}`} className='badge badge-pill text-dark bg-warning ml-1'>{tech}</Link>
                        ))}
                    </p>
                    <p className='fw-bold'>Duration: <a href=' '>3 Hours 30 Minutes</a></p>
                    <p className='fw-bold'>Total Enrolled: <a href=' '>{courseData.total_enrolled_students} Student(s)</a></p>
                    <p className='fw-bold'>
                        Rating: {avgRating}/5
                        {
                            enrollStatus === 'success' && studentLoginStatus === 'success' &&
                            <>
                                {ratingStatus != 'success' &&
                                    <button type="button" className='btn btn-primary btn-sm ms-2' data-bs-toggle="modal" data-bs-target="#ratingModal">Rating</button>
                                }
                                {ratingStatus == 'success' &&
                                    <small className='badge bg-info text-dark ms-2'>You already rated this course</small>
                                }
                                <div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="ratingModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="ratingModalLabel">Rate for {courseData.title}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <label for="exampleInputEmail1" className="form-label">Rating</label>
                                                        <select onChange={handleChange} className='form-control' name='rating'>
                                                            <option value='1'>1</option>
                                                            <option value='2'>2</option>
                                                            <option value='3'>3</option>
                                                            <option value='4'>4</option>
                                                            <option value='5'>5</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="exampleInputPassword1" className="form-label">Review</label>
                                                        <textarea onChange={handleChange} className='form-control' name='reviews' rows='7'></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </p>
                    <p className='fw-bold'>
                        Views: {courseViews}
                    </p>
                    {
                        enrollStatus === 'success' && studentLoginStatus == 'success' &&
                        <p><span >You are already enrolled in this course</span></p>

                    }
                    {
                        studentLoginStatus === 'success' && enrollStatus !== 'success' &&
                        <p><button onClick={enrollCourse} type='button' className='btn btn-success'>Enroll in this course</button></p>

                    }
                    {
                        studentLoginStatus === 'success' && favouriteStatus !== 'success' &&
                        <p><button onClick={markAsFavourite} title='Add in your favourite course list' type='button' className='btn btn-outline-danger'><i className='fas fa-heart'></i></button></p>

                    }
                    {
                        studentLoginStatus === 'success' && favouriteStatus === 'success' &&
                        <p><button onClick={removeFavourite} title='Remove from your favourite course list' type='button' className='btn btn-danger'><i className='fas fa-heart'></i></button></p>

                    }
                    {
                        studentLoginStatus !== 'success' &&
                        <p><Link to='/login'>Please login to enroll in this course</Link></p>

                    }
                </div>
            </div>
            {/* Course Videos */}
            {
                enrollStatus === 'success' && studentLoginStatus == 'success' &&
                <div className='card mt-4'>
                    <div className='card-header'>
                        <h5>In this course</h5>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {Array.isArray(chapterData) && chapterData.map((chapter, index) => (
                            <li className='list-group-item'>{chapter.title}
                                <span className='float-end'>
                                    <button className='btn btn-sm'>
                                        <span className='me-3'>1 Hour 30 Minutes</span>
                                        <i className="fa-sharp fa-solid fa-circle-play fa-2xl" data-bs-toggle="modal" data-bs-target="#videoModal1" style={{ color: '#d40c0c' }}></i>
                                    </button>
                                </span>
                                {/* <!-- Video Modal --> */}
                                <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="ratio ratio-16x9">
                                                    {/* <iframe src={chapter.video} title={chapter.title} allowfullscreen></iframe> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {/* Related Subjects */}
            <h3 className='pb-1 mb-4 mt-5'>Related Courses</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                {Array.isArray(relatedCourseData) && relatedCourseData.map((rcourse, index) => (
                    <div className="col">
                        <div className="card h-100">
                            <Link target='__blank' to={`/detail/${rcourse.pk}`}>
                                <img src={`${siteUrl}/${rcourse.fields.featured_img}`} className='card-img-top' alt={rcourse.fields.title} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/detail/${rcourse.pk}`}>{rcourse.fields.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CourseDetail