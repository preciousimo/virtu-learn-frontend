import React from 'react'

function TeacherLogout() {
    localStorage.removeItem('teacherLoginStatus')
    window.location.href = '/teacher-login';
    return (
        <div>TeacherLogout</div>
    )
}

export default TeacherLogout