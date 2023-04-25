import React from 'react'
import { Link } from 'react-router-dom'

function SubjectDetail() {
    // let { subject_id } = useParams();
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                </div>
                <div className='col-8'>
                    <h3>Subject Title</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam ni</p>
                    <p className='fw-bold'>Subject By: <Link to='/teacher-detail/1'>Mr Precious</Link></p>
                    <p className='fw-bold'>Duration: <a href=' '>3 Hours 30 Minutes</a></p>
                    <p className='fw-bold'>Total Enrolled: <a href=' '>456 Student</a></p>
                    <p className='fw-bold'>Rating: <a href=' '>4.5/5</a></p>
                </div>
            </div>
            {/* Course Videos */}
            <div className='card mt-4'>
                <div className='card-header'>
                    <h5>Subject Videos</h5>
                </div>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Video 1
                        <span className='float-end'>
                            <button className='btn btn-sm'>
                                <span className='me-3'>1 Hour 30 Minutes</span>
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" data-bs-toggle="modal" data-bs-target="#videoModal1" style={{color: '#d40c0c'}}></i>
                            </button>
                        </span>
                        {/* <!-- Video Modal --> */}
                        <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div class="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='list-group-item'>Video 2
                        <span className='float-end'>
                            <button className='btn btn-sm'>
                                <span className='me-3'>1 Hour 30 Minutes</span>
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                            </button>
                        </span>
                    </li>
                    <li className='list-group-item'>Video 3
                        <span className='float-end'>
                            <button className='btn btn-sm'>
                                <span className='me-3'>1 Hour 30 Minutes</span>
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                            </button>
                        </span>
                    </li>
                    <li className='list-group-item'>Video 4
                        <span className='float-end'>
                            <button className='btn btn-sm'>
                                <span className='me-3'>1 Hour 30 Minutes</span>
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                            </button>
                        </span>
                    </li>
                    <li className='list-group-item'>Video 5
                        <span className='float-end'>
                            <button className='btn btn-sm'>
                                <span className='me-3'>1 Hour 30 Minutes</span>
                                <i className="fa-sharp fa-solid fa-circle-play fa-2xl" style={{color: '#d40c0c'}}></i>
                            </button>
                        </span>
                    </li>
                </ul>
            </div>

            {/* Related Subjects */}
            <h3 className='pb-1 mb-4 mt-5'>Related Subjects</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubjectDetail