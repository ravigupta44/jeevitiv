import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
// import about from './Main/About';

function Dropdown({toggleNavbar}) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(state => !state)
    toggleNavbar()
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "customize-dropdown-menu clicked" : "customize-dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`customize-${item.cName}`}
                to={item.path}
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

export default Dropdown;
