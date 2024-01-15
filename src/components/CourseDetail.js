import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

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
    let { course_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/course/${course_id}`)
                .then((res) => {
                    setCourseData(res.data);
                    setChapterData(res.data.course_chapters);
                    setTeacherData(res.data.teacher);
                    setRelatedCourseData(JSON.parse(res.data.related_videos));
                    setTechListData(res.data.tech_list);
                });
        } catch (err) {
            console.error(err);
        }
    }, [course_id]);
    
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
                    <p className='fw-bold'>Techs:&nbsp;
                    {Array.isArray(techListData) && techListData.map((tech, index) => (
                        <Link to={`/category/${tech.trim()}`} className='badge badge-pill text-dark bg-warning ml-1'>{tech}</Link>
                    ))}
                    </p>
                    <p className='fw-bold'>Duration: <a href=' '>3 Hours 30 Minutes</a></p>
                    <p className='fw-bold'>Total Enrolled: <a href=' '>456 Student</a></p>
                    <p className='fw-bold'>Rating: <a href=' '>4.5/5</a></p>
                </div>
            </div>
            {/* Course Videos */}
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
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" data-bs-toggle="modal" data-bs-target="#videoModal1" style={{color: '#d40c0c'}}></i>
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
                                        <div class="ratio ratio-16x9">
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