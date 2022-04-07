import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from '../../Assets/logo.png'
//import Services_Dropdown from "./Services_Dropdown";
import RDropdown from "./RDropdown";
import LoginDropdown from "./loginDropdown";
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [Sdropdown, setSDropdown] = useState(false);
  const [Rdropdown, setRDropdown] = useState(false);
  const [loginDropdown, setLDropdown] = useState(false);

  // Company
  const handleClick = () => setClick((state) => !state);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onClickHandlerCom = () => {
    setDropdown((state) => !state);
  }

  // Services
  const closeMobile = () => setClick(false);

  const onMouseEnt = () => {
    if (window.innerWidth < 960) {
      setSDropdown(true);
    } else {
      setSDropdown(true);
    }
  };

  const onMouseLea = () => {
    if (window.innerWidth < 960) {
      setSDropdown(false);
    } else {
      setSDropdown(false);
    }
  };

 

  // Resources
  const closeMobileMenuR = () => setClick(false);

  const onMouseEnterR = () => {
    if (window.innerWidth < 960) {
      setRDropdown(true);
    } else {
      setRDropdown(true);
    }
  };

  const onMouseLeaveR = () => {
    if (window.innerWidth < 960) {
      setRDropdown(false);
    } else {
      setRDropdown(false);
    }
  };

  const onClickHandlerRes = () => {
    setRDropdown((state) => !state);
  }

  // Login 
  const onMouseEnterLogin = () => {
    if (window.innerWidth < 960) {
      setLDropdown(true);
    } else {
      setLDropdown(true);
    }
  };

  const onMouseLeaveLogin = () => {
    if (window.innerWidth < 960) {
      setLDropdown(false);
    } else {
      setLDropdown(false);
    }
  };

  const onClickHandlerLogin = () => {
    setLDropdown((state) => !state);
  }

  return (
    <>
    <nav className="customize-navbar fixed-top w-100">
        {/* <Link to="/" className="customize-navbar-logo" onClick={closeMobileMenu}> */}
         
          <img src={logo} alt="logo" className="customize-logo_img" />
         

        {/* </Link> */}
        <div className="customize-menu-icon" onClick={handleClick}>
          <MenuIcon/>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
        </div>
        <ul className={`customize-nav-menu ${click&& "active"}`}>
          <li className="customize-nav-item">
            <Link to="/" className="customize-nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="customize-nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <p className="customize-nav-links mb-0" onClick= {onClickHandlerCom} >
              Company
              {/* <i className="fas fa-caret-down" /> */}
            </p>
            { dropdown &&<Dropdown toggleNavbar= {closeMobile}/>}
          </li>
          <li
            className="customize-nav-item"
            onMouseEnter={onMouseEnt}
            onMouseLeave={onMouseLea}
          >
            <Link to="/Services" className="customize-nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="customize-nav-item">
            <Link
              to="/pricing"
              className="customize-nav-links"
              onClick={closeMobileMenuR}
            >
              Prices
            </Link>
          </li>
          <li
            className="customize-nav-item"
            onMouseEnter={onMouseEnterR}
            onMouseLeave={onMouseLeaveR}
          >
            <p className="customize-nav-links mb-0" onClick= {onClickHandlerRes}>
              Resources
            </p>
            {Rdropdown && <RDropdown toggleNavbar= {closeMobile}/>}
          </li>
          <li
            className="customize-nav-item mobile"
            onMouseEnter={onMouseEnterLogin}
            onMouseLeave={onMouseLeaveLogin}>
            <p
              className="customize-nav-links"
              onClick= {onClickHandlerLogin} 
            >
              LOGIN
            </p>
            {loginDropdown && <LoginDropdown toggleNavbar= {closeMobile}/>}
          </li>
        </ul>
        <Button />
       
      </nav>
      
    </>
  );
}

export default Navbar;
