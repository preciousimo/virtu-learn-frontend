import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function CategoryCourses() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        document.title = 'Category Courses'
        try {
            axios.get(`${baseUrl}/category/`)
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
            <div class="row mb-4">
                {categoryData && categoryData.map((row, index) =>
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title"><Link to={`/course/${row.id}/${row.title}`}>{row.title} ({row.total_courses})</Link></h5>
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