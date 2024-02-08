import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';


function Home() {
  useEffect(() => {
    document.title = 'LMS | Home'
  }, [])

  const [courseData, setCourseData] = useState([]);
  const [popularCourseData, setPopularCourseData] = useState([]);
  const [popularTeacherData, setPopularTeacherData] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/course/?result=4`)
        .then((res) => {
          setCourseData(res.data);
        });
    } catch (err) {
      console.log(err);
    }

    try {
      axios.get(`${baseUrl}/popular-courses/?popular=1`)
        .then((res) => {
          setPopularCourseData(res.data);
        });
    } catch (err) {
      console.log(err);
    }

    try {
      axios.get(`${baseUrl}/popular-teachers/?popular=1`)
        .then((res) => {
          setPopularTeacherData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='container mt-4'>
      {/* Latest courses */}
      <h3 className='pb-1 mb-4 mt-5'>Latest Courses <Link to='/all-courses' className='float-end'>See All</Link></h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {courseData && courseData.map((course, index) =>
          <div class="col">
            <div class="card h-100">
              <Link to={`/detail/${course.id}`}>
                <img src={course.featured_img} height='208' className='card-img-top' alt={course.title} />
              </Link>
              <div class="card-body">
                <h5 class="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End latest courses */}

      {/* Popular courses */}
      <h3 className='pb-1 mb-4 mt-5'>Popular Courses <Link to='/popular-courses' className='float-end'>See All</Link></h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {popularCourseData && popularCourseData.map((row, index) =>
        <div class="col">
          <div class="card h-100">
              <Link to={`/detail/${row.course.id}`}>
                <img src={row.course.featured_img} height='208' className='card-img-top' alt={row.course.title} />
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
      {/* End popular courses */}

      {/* Popular teachers */}
      <h3 className='pb-1 mb-4 mt-5'>Featured Teachers <Link to='/featured-teachers' className='float-end'>See All</Link></h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {popularTeacherData && popularTeacherData.map((teacher, index) =>
        <div class="col">
          <div class="card h-100">
              <Link to={`/teacher-detail/${teacher.id}`}>
                <img src={teacher.profile_img} height='208' className='card-img-top' alt={teacher.name} />
              </Link>
            <div class="card-body">
              <h5 class="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.name}</Link></h5>
            </div>
            <div className='card-footer'>
              <div className='title'>
                <span>Total Courses: {teacher.total_teacher_courses}</span>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
      {/* Popular teachers */}

      {/* Student testimonial */}
      <h3 className='pb-1 mb-4 mt-5'>Student Testimonial</h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
          <div className="carousel-item">
            <figure class="text-center">
              <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Student testimonial */}
    </div>
  )
}
export default Home;
