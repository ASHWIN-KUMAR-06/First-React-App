import React, { useState } from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


function HamburgerMenu() {
  const [track, setTract] = useState(0);

  function sideMenu(event) {
    const menus = document.querySelector(".menus");
    if(track===0) {
      menus.style.transform = `translate(-50px, 290px)`;
      setTract(1);
    } else {
      menus.style.transform = `translate(-450px, 290px)`
      setTract(0);
    }
  }

  return (
    <>
      <Button id="side-menu" onClick={sideMenu}>
        {
          track===0 ? <MenuIcon className='side-menu-btn' /> : <MenuOpenIcon className="side-menu-btn" />
        }
      </Button>
    </>
  )
}


function Navbar() {
  
  const location = useLocation();

  return (
    <>
      <nav className='container'>
          <h3 className='logo'>Ashwin</h3>
          <HamburgerMenu />
          <ul className='menus'>

            <li className='menu-item' id={location.pathname==="/" ? "clicked" : null} >
              <NavLink className="menu-link" to={'/'}>Home</NavLink>
            </li>

            <li className='menu-item' id={location.pathname==="/service" ? "clicked" : null}>
              <NavLink className="menu-link" to={'/service'}>Service</NavLink>
            </li>

            <li className='menu-item' id={location.pathname==="/about" ? "clicked" : null}>
              <NavLink className="menu-link" to={'/about'}>About</NavLink>
            </li>

            <li className='menu-item' id={location.pathname==="/contact" ? "clicked" : null}>
              <NavLink className="menu-link" to={'/contact'}>Contact</NavLink>
            </li>

          </ul>
      </nav>
    </>
  )
};

export default Navbar;






{/* <div className='container-fluid nav_bg'>
  <div className='row'>
    <div className='col-10 mx-auto'>

    </div>
  </div>
</div> */}