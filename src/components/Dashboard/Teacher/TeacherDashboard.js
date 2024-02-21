import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import config from '../../../config/config';


function TeacherDashboard() {
  useEffect(() => {
    document.title = 'Teacher Dashboard'
  }, [])

  const [dashboardData, setDashboardData] = useState([]);
  const teacherId = localStorage.getItem('teacherId');

  useEffect(() => {
    try {
      axios.get(`${config.baseUrl}/teacher/dashboard/${teacherId}/`, teacherId)
        .then((res) => {
          setDashboardData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  })
  return (
    <div className='container mt-4'>
      <div className='row'>
        <aside className='col-md-3'>
          <TeacherSidebar />
        </aside>
        <section className='col-md-9'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card border-primary'>
                <h3 className='card-header bg-primary text-white'>Total Courses</h3>
                <div className='card-body'>
                  <h3><Link to='/teacher-courses'>{dashboardData.total_teacher_courses}</Link></h3>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card border-success'>
                <h3 className='card-header bg-success text-white'>Total Students</h3>
                <div className='card-body'>
                  <h3><Link to='/teacher-students'>{dashboardData.total_teacher_students}</Link></h3>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card border-info'>
                <h3 className='card-header bg-info text-white'>Total Chapters</h3>
                <div className='card-body'>
                  <h3><Link to='/teacher-courses'>{dashboardData.total_teacher_chapters}</Link></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeacherDashboard