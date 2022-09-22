import React from 'react';
import {Routes, Route, Navigate as Redirect} from 'react-router-dom';

import Menu from './Menu';
import User from './User';
import Search from './Search';
import ErrorPage from './ErrorPage';



function Pages(props) {
  return (
    <>
      <h1>Hello, I am a {props.name} page</h1>
    </>
  )
}


function App() {

  return(
    <>
    <Menu />

    <Routes>

      <Route exact path='/' element={<Pages name="about" />} />

      <Route exact path='/contact' element=<Pages name="contact" /> />

      <Route exact path='/service' element=<Pages name="service" /> />

      <Route path='/contact/name' element=<Pages name="name" /> />

      <Route exact path='/user/:fname/:lname' element=<User /> />

      <Route exact path='/search' element=<Search /> />

      <Route element={<ErrorPage />} />

      {/* <Redirect to="/contact" replace="true" /> */}

    </Routes>

    </>
  )
}

export default App;