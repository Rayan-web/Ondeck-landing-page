import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo-div">
            <img className="logo" src={Logo} alt="" />
          </div>
          <ul className="nav-list">
            <li className="item-list hover">
              <a href="">Products</a>
            </li>
            <li className="item-list">
              <a href="">Challenges</a>
            </li>
            <li className="item-list">
              <a href="">Resources</a>
            </li>
            <li className="item-list">
              <a href="">Other links</a>
            </li>
          </ul>
          <div className="menu">
            <a onClick={() => setShowMenu(!showMenu)}>
              <AiOutlineMenu size={"1.3em"} />
            </a>
          </div>

          <a className="button-one">Try for free</a>
          <a className="button-free">Sign in</a>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
