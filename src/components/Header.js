// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Contact from "./Contact";
// import About from "./About";

const Title = () => {
  return (
    <a href="/">
      <img
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZoezKCaWtvM-5u6C0zvBdZzrP2K2CCRBQStlcIftWA&s"
        width="70px"
      />
    </a>
  );
};

const Header = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <li>Cart</li>
        </ul>
      </div>
      {check ? (
        <button onClick={() => setCheck(false)}>Login</button>
      ) : (
        <button onClick={() => setCheck(true)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
