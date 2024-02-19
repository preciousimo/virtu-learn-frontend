import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'http://127.0.0.1:8000/api';

function CourseChapters() {
    useEffect(() => {
        document.title = 'Course Chapters';
    }, []);

    const [chapterData, setChapterData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { course_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/course-chapters/${course_id}`)
                .then((res) => {
                    setTotalResult(res.data.length);
                    setChapterData(res.data);
                });
        } catch (err) {
            console.error(err);
        }
    }, [course_id]);

    const handleDeleteClick = (chapter_id) => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(baseUrl + '/chapter/' + chapter_id)
                        .then((res) => {
                            setTotalResult(res.data.length);
                            setChapterData(res.data);
                        });
                    Swal.fire('success', 'Data has been deleted.');
                } catch (error) {
                    Swal.fire('error', 'Data has not been deleted!!');
                }
            } else {
                Swal.fire('error', 'Data has not been deleted!!');
            }
        });
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Chapters ({totalResult}) <Link className='btn btn-success btn-sm float-end' to={`/add-chapter/${course_id}`}>Add Chapter</Link></h5>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Title</th>
                                        <th>Video</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(chapterData) && chapterData.map((chapter, index) => (
                                        <tr key={chapter.id}>
                                            <td><Link to={'/edit-chapter/' + chapter.id}>{chapter.title}</Link></td>
                                            <td>
                                                <video width="200" height="100" controls>
                                                    <source src={chapter.video} type="video/mp4" />
                                                    <source src={chapter.video} type="video/webm" />
                                                    <source src={chapter.video} type="video/mov" />
                                                </video>
                                            </td>
                                            <td><Link to="/">{chapter.remarks}</Link></td>
                                            <td style={{ whiteSpace: 'nowrap' }}>
                                                <div className="btn-group">
                                                    <Link to={'/edit-chapter/' + chapter.id} className='btn btn-sm btn-info'><i className="bi bi-pencil-square"></i></Link>
                                                    <button onClick={() => handleDeleteClick(chapter.id)} className='btn btn-sm btn-danger ms-1'><i className="bi bi-trash"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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