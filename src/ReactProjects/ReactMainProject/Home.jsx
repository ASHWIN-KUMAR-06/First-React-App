import React from 'react';
import Common from './Common';
import image from './images/homepage.svg';


function Home(props) {
  return (
    <>
      <Common 
        name="Grow your business with" 
        imgsrc={image}
        visit="/service"
        btnname="Get Started"
      />
    </>
  )
}

export default Home;