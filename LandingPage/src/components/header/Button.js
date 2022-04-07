import React from "react";
import { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import LoginDropdown from "./loginDropdown";

export function Button() {
  const [click, setClick] = useState(false);
  const [loginDropdown, setLDropdown] = useState(false);
  const closeMobile = () => setClick(false);

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
    <div className="nav-button d-flex align-items-center justify-content-start">
      <Link to="#">
        <button className="Appointment_btn">Book an appointment</button>
      </Link>

      <span
        className='w-25 h-100'
        onClick= {onClickHandlerLogin} 
        onMouseEnter={onMouseEnterLogin}
        onMouseLeave={onMouseLeaveLogin}
      >
        <button className="login_btn w-100 mb-0">LOGIN</button>
        {loginDropdown && <LoginDropdown toggleNavbar= {closeMobile}/>}
      </span>
    </div>
  );
}
