import React from 'react'
import { Link } from 'react-router-dom' 
import TeacherSidebar from './TeacherSidebar'

function AddSubjects() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>
            <section className='col-md-9'>
                <div className='card'>
                    <h5 className='card-header'>Add Subjects</h5>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="video" className="form-label">Subject Video</label>
                                <input type="file" className="form-control" id="video" />
                            </div>
                            <div className="mb-3">
                                <label for="technologies" className="form-label">Technologies</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <button className='btn btn-secondary'>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default AddSubjects