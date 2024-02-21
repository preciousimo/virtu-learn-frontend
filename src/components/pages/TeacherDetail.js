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
    const [recentCourse, setRecentCourse] = useState(null);
    let { teacher_id } = useParams();

    useEffect(() => {
        try {
            axios.get(`${baseUrl}/teacher/${teacher_id}`)
                .then((res) => {
                    setTeacherData(res.data);
                    setCourseData(res.data.teacher_courses);
                    setSkillList(res.data.skill_list);
                    if (Array.isArray(res.data.teacher_courses) && res.data.teacher_courses.length > 0) {
                        setRecentCourse(res.data.teacher_courses[0]);
                    }
                });
        } catch (err) {
            console.error(err);
        }
    }, [teacher_id]);

    const icon_style = {
        'font-size': '20px',
        marginRight: '20px',
    };

    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-4'>
                    <img src={teacherData.profile_img} className='card-img-top' alt={teacherData.name} />
                </div>
                <div className='col-8'>
                    <h3>{teacherData.name}</h3>
                    <p>{teacherData.detail}</p>
                    <p className='fw-bold'>Skills:&nbsp;
                        {Array.isArray(skillList) && skillList.map((skill, index) => (
                            <Link to={`/teacher-skill-courses/${skill.trim()}/${teacherData.id}`} className='badge badge-pill text-dark bg-warning ml-1'>{skill}</Link>
                        ))}
                    </p>
                    <p className='fw-bold'>Recent Course: {recentCourse ? <Link to={`/detail/${recentCourse.id}`}>{recentCourse.title}</Link> : 'No recent course found'}</p>
                    <p>
                        {teacherData.linkedin_url &&
                            <a href={teacherData.linkedin_url} style={icon_style}><i className="bi bi-linkedin"></i></a>
                        }
                        {teacherData.twitter_url &&
                            <a href={teacherData.twitter_url} style={icon_style}><i className="bi bi-twitter-x ms-2"></i></a>
                        }
                        {teacherData.facebook_url &&
                            <a href={teacherData.facebook_url} style={icon_style}><i className="bi bi-facebook ms-2"></i></a>
                        }
                        {teacherData.instagram_url &&
                            <a href={teacherData.instagram_url} style={icon_style}><i className="bi bi-instagram ms-2"></i></a>
                        }
                        {teacherData.website_url &&
                            <a href={teacherData.website_url} style={icon_style}><i className="bi bi-globe ms-2"></i></a>
                        }
                    </p>
                </div>
            </div>
            {/* Course Videos */}
            <div className='card mt-4'>
                <div className='card-header'>
                    <h5>Subject List</h5>
                </div>
                <div className='list-group list-group-flush'>
                    {Array.isArray(courseData) && courseData.map((course, index) => (
                        <Link key={course.id} to={`/detail/${course.id}`} className='list-group-item list-group-item-action'>{course.title}</Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TeacherDetail;