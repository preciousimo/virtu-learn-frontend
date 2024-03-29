import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

// Import components
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import Search from './Search';
import CourseDetail from './pages/CourseDetail';
import TeacherDetail from './pages/TeacherDetail';

import AllCourses from './pages/AllCourses';
import PopularCourses from './pages/PopularCourses';
import Category from './pages/Category';
import CategoryCourses from './pages/CategoryCourses';
import FeaturedTeachers from './pages/FeaturedTeachers';

// Authentication components
import Register from './Authenticate/Register';
import Login from './Authenticate/Login';
import Logout from './Authenticate/Logout';
import TeacherRegister from './Authenticate/TeacherRegister';
import ForgotPassword from './Authenticate/ForgotPassword';
import ChangePasswordF from './Authenticate/ChangePasswordF';
import TeacherLogin from './Authenticate/TeacherLogin';
import VerifyTeacher from './Authenticate/VerifyTeacher';
import TeacherLogout from './Authenticate/TeacherLogout';

// Student Dashboard components
import Dashboard from './Dashboard/Student/Dashboard';
import MyCourses from './Dashboard/Student/MyCourses';
import FavCourses from './Dashboard/Student/FavCourses';
import RecommendedCourses from './Dashboard/Student/RecommendedCourses';
import ProfileSetting from './Dashboard/Student/ProfileSetting';
import ChangePassword from './Dashboard/Student/ChangePassword';
import StudentAssignments from './Dashboard/Student/StudentAssignments';
import CourseQuizList from './Dashboard/Student/CourseQuizList';
import TakeQuiz from './Dashboard/Student/TakeQuiz';
import StudentStudyMaterials from './Dashboard/Student/StudentStudyMaterials';

// Teacher Dashboard components
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
import AllQuiz from './Dashboard/Teacher/AllQuiz';
import EditQuiz from './Dashboard/Teacher/EditQuiz';
import QuizQuestions from './Dashboard/Teacher/QuizQuestions';
import AddQuizQuestion from './Dashboard/Teacher/AddQuizQuestion';
import AssignQuiz from './Dashboard/Teacher/AssignQuiz';
import StudyMaterials from './Dashboard/Teacher/StudyMaterials';
import AttemptedStudents from './Dashboard/Teacher/AttemptedStudents';
import AddStudyMaterial from './Dashboard/Teacher/AddStudyMaterial';
import MyTeachers from './Dashboard/Student/MyTeachers';

function Main() {
  return (
    <div>
      {/* Header component */}
      <Header />
      {/* Route definitions */}
      <Switch>
        {/* General pages */}
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/detail/:course_id' element={<CourseDetail />} />
        <Route path='/search/:searchstring' element={<Search />} />
        <Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />} />

        {/* Course-related pages */}
        <Route path='/all-courses' element={<AllCourses />} />
        <Route path='/popular-courses' element={<PopularCourses />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:category_id/category_slug' element={<CategoryCourses />} />
        <Route path='/featured-teachers' element={<FeaturedTeachers />} />

        {/* Authentication routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/student-dashboard' element={<Dashboard />} />
        <Route path='/my-courses' element={<MyCourses />} />
        <Route path='/my-teachers' element={<MyTeachers />} />
        <Route path='/favorite-courses' element={<FavCourses />} />
        <Route path='/recommended-courses' element={<RecommendedCourses />} />
        <Route path='/profile-setting' element={<ProfileSetting />} />
        <Route path='/change-password' element={<ChangePassword />} />

        <Route path='/teacher-register' element={<TeacherRegister />} />
        <Route path='/verify-teacher/:teacher_id' element={<VerifyTeacher />} />
        <Route path='/teacher-forgot-password' element={<ForgotPassword />} />
        <Route path='/teacher-change-password/:teacher_id' element={<ChangePasswordF />} />
        <Route path='/teacher-login' element={<TeacherLogin />} />
        <Route path='/teacher-logout' element={<TeacherLogout />} />

        {/* Teacher dashboard routes */}
        <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
        <Route path='/teacher-courses' element={<TeacherCourses />} />
        <Route path='/add-courses' element={<AddCourses />} />
        <Route path='/edit-course/:course_id' element={<EditCourse />} />
        <Route path='/all-chapters/:course_id' element={<AllChapters />} />
        <Route path='/add-chapter/:course_id' element={<AddChapter />} />
        <Route path='/edit-chapter/:chapter_id' element={<EditChapter />} />

        <Route path='/add-assignment/:teacher_id/:student_id' element={<AddAssignment />} />
        <Route path='/show-assignment/:teacher_id/:student_id' element={<ShowAssignments />} />
        <Route path='/my-assignments' element={<StudentAssignments />} />

        <Route path='/quiz' element={<AllQuiz />} />
        <Route path='/add-quiz' element={<AddQuiz />} />
        <Route path='/edit-quiz/:quiz_id' element={<EditQuiz />} />
        <Route path='/all-questions/:quiz_id' element={<QuizQuestions />} />
        <Route path='/add-quiz-question/:quiz_id' element={<AddQuizQuestion />} />
        <Route path='/assign-quiz/:course_id' element={<AssignQuiz />} />
        <Route path='/attempted-students/:quiz_id' element={<AttemptedStudents />} />
        <Route path='/course-quiz/:course_id' element={<CourseQuizList />} />
        <Route path='/take-quiz/:quiz_id' element={<TakeQuiz />} />

        <Route path='/study-materials/:course_id' element={<StudyMaterials />} />
        <Route path='/student/study-materials/:course_id' element={<StudentStudyMaterials />} />
        <Route path='/add-study/:course_id' element={<AddStudyMaterial />} />

        <Route path='/teacher-students' element={<StudentList />} />
        <Route path='/enrolled-students/:course_id' element={<EnrolledStudents />} />
        <Route path='/teacher-skill-courses/:skill_name/:teacher_id' element={<TeacherSkillCourses />} />

        <Route path='/teacher-profile-setting' element={<TeacherProfileSetting />} />
        <Route path='/teacher-change-password' element={<TeacherChangePassword />} />
      </Switch>
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Main;
