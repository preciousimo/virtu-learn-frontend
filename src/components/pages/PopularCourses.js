import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function PopularCourses() {

    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        document.title = 'Popular Courses'

        try {
            axios.get(`${baseUrl}/popular-courses/?all=1`)
                .then((res) => {
                    setCourseData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, [])
    return (
        <div className='container mt-3'>
            {/* Popular courses */}
            <h3 className='pb-1 mb-4'>Popular Courses </h3>
            <div class="row mb-4">
                {courseData && courseData.map((row, index) =>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <Link to={`/detail/${row.course.id}`}>
                                <img src={row.course.featured_img} className='card-img-top' alt={row.course.title} />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title"><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></h5>
                            </div>
                            <div className='card-footer'>
                                <div className='title'>
                                    <span>Rating: {row.rating}/5</span>
                                    <span className='float-end'>Views: {row.course.course_views}</span>
                                </div>
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

export default PopularCourses