import React from 'react'
import { Link } from 'react-router-dom'

function TeacherDetail() {
  return (
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-4'>
                <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='Teacher' />
            </div>
            <div className='col-8'>
                <h3>Mr Precious</h3>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam ni</p>
                <p className='fw-bold'>Skills: <Link to='/category/python'>Python</Link>, <Link to='/category/java'>JavaScript</Link>, <Link to='/category/php'>PHP</Link></p>
                <p className='fw-bold'>Recent Subject: <Link to='/category/django'>Django Course</Link></p> 
                <p className='fw-bold'>Rating: <a href=' '>4.5/5</a></p>
            </div>
        </div>
        {/* Course Videos */}
        <div className='card mt-4'>
            <div className='card-header'>
                <h5>Subject List</h5>
            </div>
            <div className='list-group list-group-flush'>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>Python Course 1</Link>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>Python Course 2</Link>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>JavaScript Course 1</Link>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>JavaScript Course 2</Link>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>PHP Course 1</Link>
                <Link to="/subject-detail/1" className='list-group-item list-group-item-action'>PHP Course 2</Link>
            </div>
        </div>

    </div>
  )
}

export default TeacherDetail