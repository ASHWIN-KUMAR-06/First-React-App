import React from 'react';
import Common from './Common'

import image from "./images/about.svg";


function About() {
  return (
    <>
      <Common 
        name="Welcome to About Page" 
        imgsrc={image}
        visit="/contact"
        btnname="Contact now"
      />
    </>
  )
}

export default About;