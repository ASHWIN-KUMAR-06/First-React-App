import React from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';


function User(){
  const {fname, lname} = useParams();
  const location = useLocation();
  // const history = useNavigate();



  return (
    <>
      <h1> User {fname} {lname} page </h1>
      <p> My current location is ---- {location.pathname} </p>
      {
        location.pathname===`/user/ankita/agrawal` ? <button onClick={()=>history.goBack()}> click me </button> : null
      }
    </>
  )
}

export default User;