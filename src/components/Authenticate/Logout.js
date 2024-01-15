import React from 'react'

function Logout() {
    localStorage.removeItem('studentLoginStatus')
    window.location.href = '/login';
    return (
        <div>Logout</div>
    )
}

export default Logout