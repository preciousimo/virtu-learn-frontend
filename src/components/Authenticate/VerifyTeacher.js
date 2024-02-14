import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';
function VerifyTeacher() {
  useEffect(() => {
    document.title = 'Verify Account'
  }, []);
  
  const [teacherData, setTeacherData] = useState({
    otp_digit: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const {teacher_id} = useParams();

  const handleChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.value
    });
  }

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append('otp_digit', teacherData.otp_digit);

    try {
      axios.post(`${baseUrl}/verify-teacher/${teacher_id}/`, teacherFormData)
      .then((res)=>{
        if(res.data.bool===true){
          localStorage.setItem('teacherLoginStatus', true);
          localStorage.setItem('teacherId', res.data.teacher_id);
          window.location.href = '/teacher-dashboard';
        }else{
          setErrorMsg(res.data.msg)
        }
      });
    }catch(error){
      console.log(error)
    }
  }

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus === 'true'){
    window.location.href = '/student-dashboard';
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Enter 6 Digit OTP</h4>
            </div>
            <div className="card-body">
              {errorMsg && <p className='text-danger'>{errorMsg}</p>}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">OTP</label>
                  <input type="number" name='otp_digit' onChange={handleChange} value={teacherData.otp_digit} className="form-control" />
                </div>
                <button type="submit" onClick={submitForm} className="btn btn-secondary">Verify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyTeacher