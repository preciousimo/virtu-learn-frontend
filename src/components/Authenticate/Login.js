import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';
function Login() {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  const [studentLogin, setStudentLogin] = useState({
    email: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setStudentLogin({
      ...studentLogin,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async () => {
    const studentLoginData = new FormData();
    studentLoginData.append('email', studentLogin.email);
    studentLoginData.append('password', studentLogin.password);

    try {
      const res = await axios.post(`${baseUrl}/student-login/`, studentLoginData);

      if (res.data.bool === true) {
        localStorage.setItem('studentLoginStatus', true);
        localStorage.setItem('studentId', res.data.student_id);
        window.location.href = '/';
      } else {
        setErrorMsg('Invalid credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };


  const studentLoginStatus = localStorage.getItem('studentLoginStatus');
  if (studentLoginStatus === 'true') {
    window.location.href = '/';
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <div className="card-body">
                {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" name='email' onChange={handleChange} value={studentLogin.email} className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" name='password' onChange={handleChange} value={studentLogin.password} className="form-control" id="password" placeholder="Password" />
                </div>
                {/* <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" for="rememberMe">Remember me</label>
                </div> */}
                <button type="submit" onClick={submitForm} className="btn btn-secondary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login