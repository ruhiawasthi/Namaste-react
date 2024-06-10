import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/*
Header:
  1) logo
  2) menu 
  3) about
  4) cart

Body:
   1)Search Bar
   2)RestaurantList:
        Resturant card: 
        1) Image
        2) cuisine
        3) rating
        4) Price

Footer:
  1) Contact

*/

const root = ReactDOM.createRoot(document.getElementById("root"));

Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
root.render(<Applayout />);

