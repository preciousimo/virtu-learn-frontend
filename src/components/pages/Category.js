import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import config from '../../config/config';


function CategoryCourses() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        document.title = 'Category Courses'
        try {
            axios.get(`${config.baseUrl}/category/`)
                .then((res) => {
                    setCategoryData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className='container mt-3'>
            {/* Latest courses */}
            <h3 className='pb-1 mb-4'>All Categories</h3>
            <div className="row mb-4">
                {categoryData && categoryData.map((row, index) =>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title"><Link to={`/course/${row.id}/${row.title}`}>{row.title} ({row.total_courses})</Link></h5>
                                <p className='card-text'>{row.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* End latest courses */}
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