import {useEffect} from 'react'
import { Link } from "react-router-dom";

function TeacherLogin() {
  useEffect(() => {
    document.title = 'Teacher Login'
  }, [])
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Teacher Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-secondary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherLogin