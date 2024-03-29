import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar'
import axios from 'axios'
import config from '../../../config/config';


function ShowAssignments() {
    useEffect(() => {
        document.title = 'Assignments';
    }, []);

    const [assignmentData, setAssignmentData] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const { teacher_id } = useParams();
    const { student_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${config.baseUrl}/student-assignment/${teacher_id}/${student_id}`)
                .then((res) => {
                    setTotalResult(res.data.length);
                    setAssignmentData(res.data);
                });
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar />
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>All Assignments ({totalResult}) <Link className='btn btn-success btn-sm float-end' to={`/add-assignment/${teacher_id}/${student_id}`}>Add Assignment</Link></h5>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Student Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(assignmentData) && assignmentData.map((assignment, index) => (
                                        <tr key={assignment.id}>
                                            <td>{assignment.title}</td>
                                            <td>
                                                {assignment.student_status === false &&
                                                    <span className='badge bg-warning'>Pening</span>
                                                }
                                                {assignment.student_status === true &&
                                                    <span className='badge bg-success'>Completed</span>
                                                }
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

export default ShowAssignments