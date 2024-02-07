import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';
function Login() {
  const [studentLogin, setStudentLogin] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Login'
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setStudentLogin({
        ...studentLogin,
        email: storedEmail,
        password: storedPassword
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setStudentLogin(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
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
        if (studentLogin.rememberMe) {
          localStorage.setItem('email', studentLogin.email);
          localStorage.setItem('password', studentLogin.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        window.location.href = '/';
      } else {
        setErrorMsg('Invalid credentials');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              {errorMsg && <p className='text-danger'>{errorMsg}</p>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name='email' onChange={handleChange} value={studentLogin.email} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} name='password' onChange={handleChange} value={studentLogin.password} className="form-control" id="password" placeholder="Password" />
                  <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" onChange={handleChange} checked={studentLogin.rememberMe} />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <button type="submit" onClick={submitForm} className="btn btn-secondary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
