import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './Home';

import SubjectDetail from './SubjectDetail';
import TeacherDetail from './TeacherDetail';
import AllSubjects from './pages/AllSubjects';
import TopSubjects from './pages/TopSubjects';
import FeaturedTeachers from './pages/FeaturedTeachers';

import Header from './Header';
import About from './About';
import Footer from './Footer';

import Register from './Authenticate/Register';
import Login from './Authenticate/Login';
import TeacherLogin from './Authenticate/TeacherLogin';
import TeacherRegister from './Authenticate/TeacherRegister';

import Dashboard from './Dashboard/Student/Dashboard';
import MySubjects from './Dashboard/Student/MySubjects';
import FavSubjects from './Dashboard/Student/FavSubjects';
import RecSubjects from './Dashboard/Student/RecSubjects';
import ProfileSetting from './Dashboard/Student/ProfileSetting';
import ChangePassword from './Dashboard/Student/ChangePassword';

import TeacherDashboard from './Dashboard/Teacher/TeacherDashboard';
import AddSubjects from './Dashboard/Teacher/AddSubjects';
import TeacherChangePassword from './Dashboard/Teacher/TeacherChangePassword';
import TeacherSubjects from './Dashboard/Teacher/TeacherSubjects';
import TeacherProfileSetting from './Dashboard/Teacher/TeacherProfileSetting';
import StudentList from './Dashboard/Teacher/StudentList';


function Main() {
  return ( 
    <div>
        <Header />
        <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/subject-detail/:subject_id' element={<SubjectDetail />}/>
          <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}/>
          <Route path='/all-subjects' element={<AllSubjects />}/>
          <Route path='/top-subjects' element={<TopSubjects />}/>
          <Route path='/featured-teachers' element={<FeaturedTeachers />}/>
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
          <Route path='/teacher-subjects' element={<TeacherSubjects />}/>
          <Route path='/add-subjects' element={<AddSubjects />}/> 
          <Route path='/teacher-students' element={<StudentList />}/> 
          <Route path='/teacher-profile-setting' element={<TeacherProfileSetting />}/> 
          <Route path='/teacher-change-password' element={<TeacherChangePassword />}/> 


        </Switch>
        <Footer />
    </div>
  )
}
export default Main;
