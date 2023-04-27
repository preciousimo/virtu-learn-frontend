import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AllSubjects() {
    useEffect(() => {
        document.title = 'All Subjects'
    }, [])
    return (
        <div className='container mt-3'>
            {/* Latest subjects */}
            <h3 className='pb-1 mb-4'>Current Subjects </h3>
            <div class="row mb-4">
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <a href=' '>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title"><a href=' '>Mathematics</a></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <a href=' '>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title"><a href=' '>Mathematics</a></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <a href=' '>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title"><a href=' '>Mathematics</a></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <div class="card h-100">
                        <Link to='/subject-detail/1'>
                            <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='...' />
                        </Link>
                        <div class="card-body">
                            <h5 class="card-title"><Link to='/subject-detail/1'>Mathematics</Link></h5>
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

export default AllSubjects