import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api';

function ChangePasswordF() {
  useEffect(() => {
    document.title = 'Teacher - Change Password'
  }, []);

  const {teacher_id}=useParams();

  const [teacherData, setTeacherData] = useState({
    password: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]:e.target.value
    });
  };

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append('password', teacherData.password);

    try {
      const res = await axios.post(`${baseUrl}/teacher-change-password/${teacher_id}/`, teacherFormData);

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
              <h4>Enter Your New Password</h4>
            </div>
            <div className="card-body">
              {successMsg && <p className="text-success">{successMsg}</p>}
              {errorMsg && <p className="text-danger">{errorMsg}</p>}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Password
                </label>
                <input type="password" name="password" onChange={handleChange} value={teacherData.password} className="form-control" />
              </div>
              <button type="submit" onClick={submitForm} className="btn btn-secondary">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordF;
