import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';

import Home from './Home';

import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';

import AllCourses from './pages/AllCourses';
import TopCourses from './pages/TopCourses';
import CategoryCourses from './pages/CategoryCourses';
import FeaturedTeachers from './pages/FeaturedTeachers';

import Header from './Header';
import About from './About';
import Footer from './Footer';

import Register from './Authenticate/Register';
import Login from './Authenticate/Login';
import Logout from './Authenticate/Logout';
import TeacherRegister from './Authenticate/TeacherRegister';
import TeacherLogin from './Authenticate/TeacherLogin';
import TeacherLogout from './Authenticate/TeacherLogout';

import Dashboard from './Dashboard/Student/Dashboard';
import MyCourses from './Dashboard/Student/MyCourses';
import FavCourses from './Dashboard/Student/FavCourses';
import RecCourses from './Dashboard/Student/RecCourses';
import ProfileSetting from './Dashboard/Student/ProfileSetting';
import ChangePassword from './Dashboard/Student/ChangePassword';
import StudentAssignments from './Dashboard/Student/StudentAssignments';


import TeacherDashboard from './Dashboard/Teacher/TeacherDashboard';
import AddCourses from './Dashboard/Teacher/AddCourses';
import EditCourse from './Dashboard/Teacher/EditCourse';
import AddChapter from './Dashboard/Teacher/AddChapter';
import AllChapters from './Dashboard/Teacher/CourseChapters';
import EditChapter from './Dashboard/Teacher/EditChapter';
import TeacherChangePassword from './Dashboard/Teacher/TeacherChangePassword';
import TeacherCourses from './Dashboard/Teacher/TeacherCourses';
import EnrolledStudents from './Dashboard/Teacher/EnrolledStudents';
import TeacherProfileSetting from './Dashboard/Teacher/TeacherProfileSetting';
import StudentList from './Dashboard/Teacher/StudentList';
import AddAssignment from './Dashboard/Teacher/AddAssignment';
import ShowAssignments from './Dashboard/Teacher/ShowAssignments';
import TeacherSkillCourses from './Dashboard/Teacher/TeacherSkillCourses';

import AddQuiz from './Dashboard/Teacher/AddQuiz';


function Main() {
  return ( 
    <div>
        <Header />
        <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:course_id' element={<CourseDetail />}/>
          <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />}/>
          <Route path='/all-courses' element={<AllCourses />}/>
          <Route path='/all-chapters/:course_id' element={<AllChapters />}/>
          <Route path='/top-courses' element={<TopCourses />}/>
          <Route path='/category/:category_slug' element={<CategoryCourses />}/>
          <Route path='/featured-teachers' element={<FeaturedTeachers />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/logout' element={<Logout />}/>
          <Route path='/student-dashboard' element={<Dashboard />}/> 
          <Route path='/my-courses' element={<MyCourses />}/>
          <Route path='/favorite-courses' element={<FavCourses />}/>
          <Route path='/recommended-courses' element={<RecCourses />}/>
          <Route path='/profile-setting' element={<ProfileSetting />}/>
          <Route path='/change-password' element={<ChangePassword />}/>
          <Route path='/teacher-register' element={<TeacherRegister />}/>
          <Route path='/teacher-login' element={<TeacherLogin />}/>
          <Route path='/teacher-logout' element={<TeacherLogout />}/>
          <Route path='/teacher-dashboard' element={<TeacherDashboard />}/> 
          <Route path='/teacher-courses' element={<TeacherCourses />}/>
          <Route path='/enrolled-students/:course_id' element={<EnrolledStudents />}/>
          <Route path='/teacher-skill-courses/:skill_name/:teacher_id' element={<TeacherSkillCourses />}/>
          <Route path='/add-courses' element={<AddCourses />}/> 
          <Route path='/edit-course/:course_id' element={<EditCourse />}/> 
          <Route path='/add-chapter/:course_id' element={<AddChapter />}/> 
          <Route path='/add-assignment/:teacher_id/:student_id' element={<AddAssignment />}/> 
          <Route path='/show-assignment/:teacher_id/:student_id' element={<ShowAssignments />}/> 
          <Route path='/my-assignments' element={<StudentAssignments />}/> 
          <Route path='/add-quiz' element={<AddQuiz />}/>
          <Route path='/edit-chapter/:chapter_id' element={<EditChapter />}/> 
          <Route path='/teacher-students' element={<StudentList />}/> 
          <Route path='/teacher-profile-setting' element={<TeacherProfileSetting />}/> 
          <Route path='/teacher-change-password' element={<TeacherChangePassword />}/> 


        </Switch>
        <Footer />
    </div>
  )
}
export default Main;
