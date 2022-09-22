import React from 'react';
import {NavLink} from 'react-router-dom';


function Common(props) {
  return (
    <>
      <section id='header' className='header'>
        <div className='header-content'>
          <h2> {props.name} <span className='brand'>Ashwin</span> </h2>
          <p>we are the team of talented developer making websites</p>
          <button>
            <NavLink to={props.visit} > {props.btnname} </NavLink>
          </button>
        </div>
        <div className='header-image'>
          <div className='img-container'>
            <img src={props.imgsrc} alt="image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;