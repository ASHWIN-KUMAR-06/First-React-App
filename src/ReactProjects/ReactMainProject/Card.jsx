import React from 'react';
import {NavLink} from 'react-router-dom';


function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.src} className="card-img-top" alt={props.src} />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
        </div>
      </div>
    </>
  )
}

export default Card;