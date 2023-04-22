import React from 'react'
import { useParams, Link } from 'react-router-dom'

function CourseDetail() {
    let { course_id } = useParams();
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                </div>
                <div className='col-8'>
                    <h3>Course Title</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam ni</p>
                    <p className='fw-bold'>Course By: <a href=' '>Mr Precious</a></p>
                    <p className='fw-bold'>Duration: <a href=' '>3 Hours 30 Minutes</a></p>
                    <p className='fw-bold'>Total Enrolled: <a href=' '>456 Student</a></p>
                    <p className='fw-bold'>Rating: <a href=' '>4.5/5</a></p>
                </div>
            </div>
            {/* Course Videos */}
            <div className='card mt-4'>
                <div className='card-header'>
                    <h5>Course Videos</h5>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Video 1
                        <button className='btn btn-sm float-end'>
                            <i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                        </button>
                    </li>
                    <li className='list-group-item'>Video 2
                        <button className='btn btn-sm float-end'>
                            <i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                        </button>
                    </li>
                    <li className='list-group-item'>Video 3
                        <button className='btn btn-sm float-end'>
                            <i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                        </button>
                    </li>
                    <li className='list-group-item'>Video 4
                        <button className='btn btn-sm float-end'>
                            <i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                        </button>
                    </li>
                    <li className='list-group-item'>Video 5
                        <button className='btn btn-sm float-end'>
                            <i class="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Related Subjects */}
            <h3 className='pb-1 mb-4 mt-5'>Related Subjects</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <Link to='/detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <Link to='/detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseDetail