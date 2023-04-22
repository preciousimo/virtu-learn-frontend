import React from 'react'
import Home from './Home';
import CourseDetail from './CourseDetail';
import Header from './Header';
import About from './About';
import Footer from './Footer';

import { Routes as Switch, Route } from 'react-router-dom';

function Main() {
  return (
    <div>
        <Header />
        <Switch>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/detail/:course_id' element={<CourseDetail />}/>
        </Switch>
        <Footer />
    </div>
  )
}
export default Main;
