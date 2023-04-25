import React from 'react'
import Home from './Home';
import CourseDetail from './CourseDetail';
import Header from './Header';
import About from './About';
import Footer from './Footer';

import { Routes as Switch, Route } from 'react-router-dom';
import Register from './Authenticate/Register';
import Login from './Authenticate/Login';
import TeacherLogin from './Authenticate/TeacherLogin';
import TeacherRegister from './Authenticate/TeacherRegister';
import Dashboard from './Dashboard/Student/Dashboard';
import MySubjects from './Dashboard/MySubjects';
import FavSubjects from './Dashboard/FavSubjects';
import RecSubjects from './Dashboard/RecSubjects';
import ProfileSetting from './Dashboard/ProfileSetting';
import ChangePassword from './Dashboard/ChangePassword';
import TeacherDashboard from './Dashboard/Teacher/TeacherDashboard';

function Main() {
  return ( 
    <div>
        <Header />
        <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:course_id' element={<CourseDetail />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/> 
          <Route path='/my-subjects' element={<MySubjects />}/>
          <Route path='/favorite-subjects' element={<FavSubjects />}/>
          <Route path='/recommended-subjects' element={<RecSubjects />}/>
          <Route path='/profile-setting' element={<ProfileSetting />}/>
          <Route path='/change-password' element={<ChangePassword />}/>
          <Route path='/teacher-login' element={<TeacherLogin />}/>
          <Route path='/teacher-register' element={<TeacherRegister />}/>
          <Route path='/teacher-dashboard' element={<TeacherDashboard />}/> 
        </Switch>
        <Footer />
    </div>
  )
}
export default Main;
