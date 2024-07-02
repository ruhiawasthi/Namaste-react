// import React from "react";
import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStataus from "../utils/useOnlineStatus";

// import Contact from "./Contact";
// import About from "./About";
// import Grocery from "./Grocery";


// Lazy loading also known as:
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

//here this import is not same as the above import . this import is a function
const Grocery = lazy(()=>import("./Grocery"));
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
  const onlineStatus = useOnlineStataus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🛑"}</li>
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
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
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
