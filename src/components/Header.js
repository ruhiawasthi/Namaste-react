// import React from "react";
import { useState } from "react";

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
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {check ? (
        <button onClick={() => setCheck(false)}>Login</button>
      ) : (
        <button onClick={() => setCheck(true)}>Logiout</button>
      )}
    </div>
  );
};

export default Header;
