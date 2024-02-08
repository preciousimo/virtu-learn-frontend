import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherDetail() {
    useEffect(() => {
        document.title = 'Teacher Detail'
    }, [])

    const [teacherData, setTeacherData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [skillList, setSkillList] = useState([]);
    let { teacher_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/teacher/${teacher_id}`)
                .then((res) => {
                    setTeacherData(res.data);
                    setCourseData(res.data.teacher_courses);
                    setSkillList(res.data.skill_list);
                });
        } catch (err) {
            console.error(err);
        }
    }, [teacher_id]);

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src='https://images.unsplash.com/photo-1612477954469-c6a60de89802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' className='card-img-top' alt='Teacher' />
                </div>
                <div className='col-8'>
                    <h3>{teacherData.name}</h3>
                    <p>{teacherData.detail}</p>
                    <p className='fw-bold'>Skills:&nbsp;
                        {Array.isArray(skillList) && skillList.map((skill, index) => (
                            <Link to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`} className='badge badge-pill text-dark bg-warning ml-1'>{skill}</Link>
                        ))}
                    </p>
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
                    {Array.isArray(courseData) && courseData.map((course, index) => (
                        <Link to={`/detail/${course.id}`} className='list-group-item list-group-item-action'>{course.title}</Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TeacherDetail