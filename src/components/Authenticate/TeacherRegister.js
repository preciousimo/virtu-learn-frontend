import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/teacher/';
function TeacherRegister() {
  const [teacherData, setTeacherData] = useState({
    'name': '',
    'email': '',
    'password': '',
    'qualification': '',
    'mobile_no': '',
    'skills': '',
    'status': '',
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

    try{
      axios.post(baseUrl, teacherFormData)
      .then((res) => {
        setTeacherData(
          {
            'name': '',
            'email': '',
            'password': '',
            'qualification': '',
            'mobile_no': '',
            'skills': '',
            'status': 'success',
          }
        );
      });
    }catch(err){
        console.log(err);
        setTeacherData({'status': 'error'});
    }

  };
  
  useEffect(() => {
    document.title = 'Teacher Register'
  });

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus === 'true'){
    window.location.href = '/teacher-dashboard';
  }

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
                  <label for="exampleInputName" className="form-label">Full Name</label>
                  <input value={teacherData.name} onChange={handleChange} name='name' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label">Email</label>
                  <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword" className="form-label">Password</label>
                  <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputQualification" className="form-label">Qualification</label>
                  <input value={teacherData.qualification} onChange={handleChange} name='qualification' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputNumber" className="form-label">Mobile Number</label>
                  <input value={teacherData.mobile_no} onChange={handleChange} name='mobile_no' type="number" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputSkills" className="form-label">Skills</label>
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