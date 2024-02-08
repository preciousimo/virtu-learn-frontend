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
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/course/?result=4`)
        .then((res) => {
          setCourseData(res.data.results);
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

    try {
      axios.get(`${baseUrl}/student-testimonial/`)
        .then((res) => {
          setTestimonialData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className='container mt-4'>
      {/* Latest courses */}
      <h3 className='pb-1 mb-4 mt-5'>Latest Courses <Link to='/all-courses' className='float-end'>See All</Link></h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {courseData && courseData.map((course, index) =>
          <div className="col" key={index}>
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

      {/* Popular courses */}
      <h3 className='pb-1 mb-4 mt-5'>Popular Courses <Link to='/popular-courses' className='float-end'>See All</Link></h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {popularCourseData && popularCourseData.map((row, index) =>
        <div className="col" key={index}>
          <div className="card h-100">
              <Link to={`/detail/${row.course.id}`}>
                <img src={row.course.featured_img} height='208' className='card-img-top' alt={row.course.title} />
              </Link>
            <div className="card-body">
              <h5 className="card-title"><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></h5>
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
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
      {popularTeacherData && popularTeacherData.map((teacher, index) =>
        <div className="col" key={index}>
          <div className="card h-100">
              <Link to={`/teacher-detail/${teacher.id}`}>
                <img src={teacher.profile_img} height='208' className='card-img-top' alt={teacher.name} />
              </Link>
            <div className="card-body">
              <h5 className="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.name}</Link></h5>
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
      {/* End popular teachers */}

      {/* Student testimonial */}
      <h3 className='pb-1 mb-4 mt-5'>Student Testimonial</h3>
      <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        <div className="carousel-indicators">
        {testimonialData && testimonialData.map((row, index) =>
          <button key={row.id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : "" } aria-current="true" aria-label="Slide 1"></button>
        )}
        </div>
        <div className="carousel-inner">
        {testimonialData && testimonialData.map((row, i) =>
          <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item"}>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>{row.reviews}</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                {row.course.title} <cite title="Source Title">{row.student.name}</cite>
              </figcaption>
            </figure>
          </div>
        )}
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
      {/* End student testimonial */}
    </div>
  )
}
export default Home;
