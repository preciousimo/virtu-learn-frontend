import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Sidebar from './Sidebar'
import axios from 'axios'
import config from '../../../config/config';


function StudentStudyMaterials() {
    const [studyData, setStudyData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { course_id } = useParams();

    useEffect(() => {
        document.title = 'Study Materials';
        try {
            axios.get(`${config.baseUrl}/student/study-materials/${course_id}`)
                .then((res) => {
                    setTotalResult(res.data.length);
                    setStudyData(res.data);
                });
        } catch (err) {
            console.error(err);
        }
    }, [course_id]);

    const downloadFile = (file_url)=>{
        window.location.href=file_url;
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <Sidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Study Materials ({totalResult})</h5>
                        <div className='card-body' style={{ overflowX: 'auto' }}>
                            <table className='table table-bordered' style={{ tableLayout: 'auto' }}>
                                <thead>
                                    <tr style={{ whiteSpace: 'nowrap' }}>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Upload</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(studyData) && studyData.map((row, index) => (
                                        <tr key={row.id}>
                                            <td>{row.title}</td>
                                            <td>{row.description}</td>
                                            <td>
                                                <button onClick={()=>downloadFile(row.upload)} className='btn btn-outline-primary' >Downlod File</button>
                                            </td>
                                            <td>{row.remarks}</td>
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

export default StudentStudyMaterials