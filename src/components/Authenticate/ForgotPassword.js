import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api';

function ForgotPassword() {
  const [teacherData, setTeacherData] = useState({
    email: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Teacher - Forgot Password'
  }, []);

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]:e.target.value
    });
  };

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherData.email);

    try {
      const res = await axios.post(`${baseUrl}/teacher-forgot-password/`, teacherFormData);

      if (res.data.bool === true) {
        setSuccessMsg(res.data.msg);
        setErrorMsg('');
      } else {
        setErrorMsg(res.data.msg);
        setSuccessMsg('');
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
              <h4>Enter Your Registered Email</h4>
            </div>
            <div className="card-body">
              {successMsg && <p className="text-success">{successMsg}</p>}
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" name="email" onChange={handleChange} value={teacherData.email} className="form-control" />
              </div>
              <button type="submit" onClick={submitForm} className="btn btn-secondary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
