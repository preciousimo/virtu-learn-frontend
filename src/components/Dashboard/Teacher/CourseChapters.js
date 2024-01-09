import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function CourseChapters() {
    useEffect(() => {
        document.title = 'Course Chapters'
    }, [])

    const [chapterData, setChapterData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { course_id } = useParams();


    useEffect(() => {
        try {
            axios.get(baseUrl + '/course-chapters/' + course_id)
                .then((res) => {
                    setTotalResult(res.data.length);
                    setChapterData(res.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    // Delete Data
    const Swal = require('sweetalert2')
    const handleDeleteClick = () =>{
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
          })
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Chapters ({totalResult})</h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Video</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chapterData.map((chapter, index) => (
                                        <tr>
                                            <td><Link to={'/edit-chapter/'+chapter.id}>{chapter.title}</Link></td>
                                            <td>
                                                <video width="100" height="100" controls>
                                                    <source src={chapter.video.url} type="video/mp4" />
                                                    Your browser does not support the video element.
                                                </video>
                                            </td>
                                            <td><Link to="/">{chapter.remarks}</Link></td>
                                            <td>
                                                <Link to={'/edit-chapter/'+chapter.id} className='btn btn-sm btn-info'><i class="bi bi-pencil-square"></i></Link>
                                                <button onClick={handleDeleteClick} to={'/delete-chapter/'+chapter.id} className='btn btn-sm btn-danger ms-1'><i class="bi bi-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CourseChapters