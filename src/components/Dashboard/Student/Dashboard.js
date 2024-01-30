import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function Dashboard() {
  useEffect(() => {
    document.title = 'Student Dashboard'
  }, [])

  const [dashboardData, setDashboardData] = useState([]);
  const studentId = localStorage.getItem('studentId');

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/student/dashboard/${studentId}/`)
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
          <Sidebar />
        </aside>
        <section className='col-md-9'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='card border-primary'>
                <h3 className='card-header bg-primary text-white'>Enrolled Courses</h3>
                <div className='card-body'>
                  <h3><Link to='/my-courses'>{dashboardData.enrolled_courses}</Link></h3>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card border-success'>
                <h3 className='card-header bg-success text-white'>Favorite Courses</h3>
                <div className='card-body'>
                  <h3><Link to='/favorite-courses'>{dashboardData.favourite_courses}</Link></h3>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card border-info'>
                <h3 className='card-header bg-info text-white'>Assignments</h3>
                <div className='card-body'>
                  <h6>
                    <Link to='/my-assignments'>Completed: {dashboardData.complete_assignments} | Pending: {dashboardData.pending_assignments}</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard