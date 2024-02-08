import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/course/';


function AllCourses() {
    const [courseData, setCourseData] = useState([]);
    const [nextUrl, setNextUrl] = useState();
    const [previousUrl, setPreviousUrl] = useState();

    useEffect(() => {
        document.title = 'All Courses'
        
        fetchData(baseUrl);
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
            <h3 className='pb-1 mb-4'>Latest Courses </h3>
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
                    {previousUrl &&
                        <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(previousUrl)}><i class="bi bi-arrow-left"></i> Previous</button></li>
                    }
                    {nextUrl &&
                        <li className="page-item"><button className="page-link" onClick={()=>paginationHandler(nextUrl)}> <i class="bi bi-arrow-right"></i>Next</button></li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default AllCourses