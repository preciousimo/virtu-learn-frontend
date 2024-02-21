import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import Swal from 'sweetalert2'
import config from '../../../config/config';


function StudyMaterials() {
    const [studyData, setStudyData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { course_id } = useParams();

    useEffect(() => {
        document.title = 'Study Materials';
        try {
            axios.get(`${config.baseUrl}/study-materials/${course_id}`)
                .then((res) => {
                    setTotalResult(res.data.length);
                    setStudyData(res.data);
                });
        } catch (err) {
            console.error(err);
        }
    }, [course_id]);

    const handleDeleteClick = (study_id) => {
        Swal.fire({
            title: 'Confirm!',
            text: 'Are you sure you want to delete?',
            icon: 'info',
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    axios.delete(`${config.baseUrl}/study-material/${study_id}`)
                        .then((res) => {
                            Swal.fire('success', 'Data has been deleted.');
                            try {
                                axios.delete(`${config.baseUrl}/study-materials/${course_id}`)
                                    .then((res) => {
                                        setTotalResult(res.data.length);
                                        setStudyData(res.data);
                                    })
                            } catch (error) {
                                console.log(error)
                            }
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
                        <h5 className='card-header'>All Study Materials ({totalResult}) <Link className='btn btn-success btn-sm float-end' to={`/add-study/${course_id}`}>Add Study Material</Link></h5>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Title</th>
                                        <th>Upload</th>
                                        <th>Remarks</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(studyData) && studyData.map((row, index) => (
                                        <tr key={row.id}>
                                            <td><Link to={'/edit-study/' + row.id}>{row.title}</Link></td>
                                            <td>
                                                <Link to={row.upload} className='btn btn-outline-primary'>Files</Link>
                                            </td>
                                            <td>{row.remarks}</td>
                                            <td style={{ whiteSpace: 'nowrap' }}>
                                                <div className="btn-group">
                                                    <button onClick={() => handleDeleteClick(row.id)} className='btn btn-sm btn-danger ms-1'><i className="bi bi-trash"></i></button>
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

export default StudyMaterials