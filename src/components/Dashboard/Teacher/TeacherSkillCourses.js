import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import config from '../../../config/config';


function TeacherSkillCourses() {
    useEffect(() => {
        document.title = 'Teacher Skill Courses'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const { skill_name, teacher_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/course/?skill_name=${skill_name}&teacher=${teacher_id}`)
                .then((res) => {
                    setCourseData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className='container mt-3'>
            {/* Latest subjects */}
            <h3 className='pb-1 mb-4'>{skill_name}</h3>
            <div className="row mb-4">
                {courseData && courseData.map((course, index) =>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100">
                            <Link to={`/detail/${course.id}`}>
                                <img src={course.featured_img} className='card-img-top' alt={course.title} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* End latest subjects */}
            {/* Pagination */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default TeacherSkillCourses