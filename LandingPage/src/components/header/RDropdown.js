import React, { useState } from "react";
import { Rmenu } from "./Rmenu";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Rdropdown({toggleNavbar}) {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(state => !state);
    toggleNavbar()
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "customize-dropdown-menu clicked" : "customize-dropdown-menu"}
      >
        {Rmenu.map((item, index) => {
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

export default Rdropdown;
