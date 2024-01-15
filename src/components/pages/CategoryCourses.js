import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function CategoryCourses() {
    useEffect(() => {
        document.title = 'Category Subjects'
    }, [])

    const [courseData, setCourseData] = useState([]);
    const { category_slug } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/course/?category=${category_slug}`)
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
            <h3 className='pb-1 mb-4'>{category_slug} </h3>
            <div class="row mb-4">
                {courseData && courseData.map((course, index) =>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <Link to={`/detail/${course.id}`}>
                                <img src={course.featured_img} className='card-img-top' alt={course.title} />
                            </Link>
                            <div class="card-body">
                                <h5 class="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
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

export default CategoryCourses