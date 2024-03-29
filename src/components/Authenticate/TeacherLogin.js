import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config/config';


function TeacherLogin() {
  const [teacherLogin, setTeacherLogin] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Teacher Login'
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setTeacherLogin({
        ...teacherLogin,
        email: storedEmail,
        password: storedPassword
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setTeacherLogin((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const submitForm = async () => {
    const teacherLoginData = new FormData();
    teacherLoginData.append('email', teacherLogin.email);
    teacherLoginData.append('password', teacherLogin.password);

    try {
      const res = await axios.post(`${config.baseUrl}/teacher-login/`, teacherLoginData);

      if (res.data.bool === true) {
        localStorage.setItem('teacherLoginStatus', true);
        localStorage.setItem('teacherId', res.data.teacher_id);
        if (teacherLogin.rememberMe) {
          localStorage.setItem('email', teacherLogin.email);
          localStorage.setItem('password', teacherLogin.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        window.location.href = '/';
      } else {
        setErrorMsg(res.data.msg);
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
              <h4>Teacher Login</h4>
            </div>
            <div className="card-body">
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" name="email" onChange={handleChange} value={teacherLogin.email} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input type={showPassword ? 'text' : 'password'} name="password" onChange={handleChange} value={teacherLogin.password} className="form-control" id="password" placeholder="Password" />
                  <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div className="form-check mb-3 d-flex justify-content-between">
                <div>
                  <input type="checkbox" className="form-check-input" id="rememberMe" name="rememberMe" onChange={handleChange} checked={teacherLogin.rememberMe} />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <p className="text-end">
                  Don't have an account? <Link to="/teacher-register">Register</Link>
                </p>
              </div>
              <button type="submit" onClick={submitForm} className="btn btn-secondary">
                Login
              </button>
              <Link to="/teacher-forgot-password" className="btn btn-link">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherLogin;
