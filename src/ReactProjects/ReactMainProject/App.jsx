import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import "./bootstrap/bootstrap.min.css";
import './custom.css';


///// components
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <>
      <div className='global'>
        <Navbar name="name" />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/contact' element={<Contact />} />
          {/* <Navigate to={"/"} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  )
}


export default App;