import React from 'react'
import Home from './Home';
import CourseDetail from './CourseDetail';
import Header from './Header';
import About from './About';
import Footer from './Footer';

import { Routes as Switch, Route } from 'react-router-dom';
import Register from './Authenticate/Register';
import Login from './Authenticate/Login';

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
        </Switch>
        <Footer />
    </div>
  )
}
export default Main;
