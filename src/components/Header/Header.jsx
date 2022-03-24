import React from "react";
import logo from "./../../images/Logo.svg";
import "./Header.css";
const Header = ({ countCarts }) => {
  return (
    <>
      <header id="header">
        <div className="container">
          <nav className="navbar">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <menu>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#order">Order</a>
                </li>
                <li>
                  <a href="#cart" id="cart">
                    Cart <sup className="badge">{countCarts}</sup>
                  </a>
                </li>
              </ul>
            </menu>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
