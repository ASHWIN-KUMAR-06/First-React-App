import React from 'react';
import {NavLink} from 'react-router-dom';
import "./utility.css";



function Menu() {
  return (
    <>
    <div className='navbar'>

      <NavLink to="/" exact activeClassName="active_class"> 
        About US 
      </NavLink>

      <NavLink to={"/service"} exact  activeClassName="active_class"> 
        Services 
      </NavLink>

      <NavLink to="/search"> 
        Search 
      </NavLink>

      <NavLink to={"/user/ashwin/kumar"}>
        User
      </NavLink>

      <NavLink to={"/contact"} exact  activeClassName="active_class"> 
        Contact US 
      </NavLink>

    </div>
    </>
  )
}


export default Menu;