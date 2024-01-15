import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/student/';

function Register() {
  useEffect(() => {
    document.title = 'Register'
  }, [])

  const [studentData, setStudentData] = useState({
    'name': '',
    'email': '',
    'password': '',
    'username': '',
    'interested_categories': '',
    'status': '',
  });

  // Change handler
  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value
    })
  }

  // Submit handler
  const submitForm = () => {
    const studentFormData = new FormData();
    studentFormData.append('name', studentData.name);
    studentFormData.append('email', studentData.email);
    studentFormData.append('password', studentData.password);
    studentFormData.append('username', studentData.username);
    studentFormData.append('interested_categories', studentData.interested_categories);

    try{
      axios.post(baseUrl, studentFormData)
      .then((res) => {
        setStudentData(
          {
            'name': '',
            'email': '',
            'password': '',
            'username': '',
            'interested_categories': '',
            'status': 'success',
          }
        );
      });
    }catch(err){
        console.log(err);
        setStudentData({'status': 'error'});
    }
  };

  const studenLoginStatus = localStorage.getItem('studenLoginStatus')
  if(studenLoginStatus === 'true'){
    window.location.href = '/';
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {studentData.status === 'success' && <div className="alert alert-success" role="alert">Student Registered Successfully</div>}
          {studentData.status === 'error' && <div className="alert alert-danger" role="alert">Student Registration Failed</div>}
          <div className="card">
            <div className="card-header">
              <h4>Student Register</h4>
            </div>
            <div className="card-body">
              {/* <form> */}
                <div className="mb-3">
                  <label for="exampleInputName" className="form-label">Full Name</label>
                  <input value={studentData.name} onChange={handleChange} name='name' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail" className="form-label">Email</label>
                  <input value={studentData.email} onChange={handleChange} name='email' type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputUsername" className="form-label">Username</label>
                  <input value={studentData.username} onChange={handleChange} name='username' type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword" className="form-label">Password</label>
                  <input value={studentData.password} onChange={handleChange} name='password' type="password" className="form-control" id="exampleInputPassword" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputInterest" className="form-label">Interest</label>
                  <textarea value={studentData.interested_categories} onChange={handleChange} name='interested_categories' className='form-control'></textarea>
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

export default Register