import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config/config';

function FeaturedTeachers() {
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        document.title = 'Featured Teachers'
        axios.get(`${config.baseUrl}/teacher/`)
            .then(res => { 
                setTeacher(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    console.log(teacher)

    return (
        <div className='container mt-3'>
            {/* Latest subjects */}
            <h3 className='pb-1 mb-4'>Featured Teachers </h3>
            <div className="row mb-4">
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card h-100">
                        <Link to='/teacher-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to='/teacher-detail/1'>Mathematics</Link></h5>
                        </div>
                        <div className='card-footer'>
                            <div className='title'>
                                <span>Rating: 4.5/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End latest subjects */}
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

export default FeaturedTeachers