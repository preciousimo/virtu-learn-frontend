import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {
    let { course_id } = useParams();
  return (
    <div>CourseDetail { course_id }</div>
  )
}

export default CourseDetail