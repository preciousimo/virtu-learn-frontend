import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from '../../config/config';


function TeacherRegister() {
  useEffect(() => {
    document.title = 'Teacher Register'
  });

  const navigate = useNavigate()
  const [teacherData, setTeacherData] = useState({
    'name': '',
    'email': '',
    'password': '',
    'qualification': '',
    'mobile_no': '',
    'skills': '',
    'status': '',
    'otp_digit': '',
  });

  // Change handler
  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    })
  }

  // Submit handler
  const submitForm = () => {
    const teacherFormData = new FormData();
    teacherFormData.append('name', teacherData.name);
    teacherFormData.append('email', teacherData.email);
    teacherFormData.append('password', teacherData.password);
    teacherFormData.append('qualification', teacherData.qualification);
    teacherFormData.append('mobile_no', teacherData.mobile_no);
    teacherFormData.append('skills', teacherData.skills);
    teacherFormData.append('otp_digit', teacherData.otp_digit);

    try{
      axios.post(config.baseUrl, teacherFormData)
      .then((res) => {
        navigate('/verify-teacher/'+res.data.id);
      });
    }catch(err){
        console.log(err);
        setTeacherData({'status': 'error'});
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {teacherData.status === 'success' && <div className="alert alert-success" role="alert">Teacher Registered Successfully</div>}
          {teacherData.status === 'error' && <div className="alert alert-danger" role="alert">Teacher Registration Failed</div>}
          <div className="card">
            <div className="card-header">
              <h4>Teacher Register</h4>
            </div>
            <div className="card-body">
              {/* <form> */}
                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                  <input value={teacherData.name} onChange={handleChange} name='name' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                  <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                  <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputQualification" className="form-label">Qualification</label>
                  <input value={teacherData.qualification} onChange={handleChange} name='qualification' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputNumber" className="form-label">Mobile Number</label>
                  <input value={teacherData.mobile_no} onChange={handleChange} name='mobile_no' type="tel" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputSkills" className="form-label">Skills</label>
                  <textarea value={teacherData.skills} onChange={handleChange} name='skills' className='form-control'></textarea>
                  <div id='emailHelp' className='form-text'>Python, JavaScript, Mathematics, etc.</div>
                </div>
                <button onClick={submitForm} type="submit" className="btn btn-secondary">Register</button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherRegister