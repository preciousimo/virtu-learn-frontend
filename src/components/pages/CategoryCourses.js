import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function CategoryCourses() {
    const [courseData, setCourseData] = useState([]);
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();
    const { category_id, category_slug } = useParams();

    useEffect(() => {
        document.title = 'Category Courses'

        fetchData(`${baseUrl}/course/?category=${category_id}`);
        
    }, []);

    const  paginationHandler=(url)=>{
        fetchData(url);
    }

    function fetchData(url){
        try {
            axios.get(url)
                .then((res) => {
                    setNextUrl(res.data.next)
                    setPreviousUrl(res.data.previous)
                    setCourseData(res.data.results);
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='container mt-3'>
            {/* Latest courses */}
            <h3 className='pb-1 mb-4'>{category_slug} </h3>
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
            {/* End latest courses */}
            {/* Pagination */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    {previousUrl &&
                        <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(previousUrl)}><i className="bi bi-arrow-left"></i> Previous</button></li>
                    }
                    {nextUrl &&
                        <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(nextUrl)}> <i className="bi bi-arrow-right"></i>Next</button></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default CategoryCourses