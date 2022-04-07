import React, { useState } from "react";
import { loginItems } from "./loginItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function LoginDropdown({toggleNavbar}) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(state => !state);
    toggleNavbar()
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "customize-dropdown-menu login clicked" : "customize-dropdown-menu login"}
      >
        {loginItems.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.icon} className='img-fluid mx-1'alt="" />
              <Link
                className={`customize-${item.cName}`}
                to= {`/login/${item.path}`}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default LoginDropdown;
