import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';
function Search() {

  const [courseData, setCourseData] = useState([]);
  const {searchstring} = useParams();

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/search-courses/${searchstring}`)
        .then((res) => {
          setCourseData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='container mt-3'>
      {/* Latest courses */}
      <h3 className='pb-1 mb-4 mt-5'>Search For <span className='text-primary'>{searchstring}</span> </h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {courseData && courseData.map((course, index) =>
          <div className="col">
            <div className="card h-100">
              <Link to={`/detail/${course.id}`}>
                <img src={course.featured_img} height='208' className='card-img-top' alt={course.title} />
              </Link>
              <div className="card-body">
                <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End latest courses */}
      {/* Pagination start */}
      <nav aria-label="Page navigation example mt-5">
        <ul className="pagination  justify-content-center">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      {/* Pagination end */}
    </div>
  )
}
export default Search;
