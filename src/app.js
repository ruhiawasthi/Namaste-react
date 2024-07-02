import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";
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
      <Outlet />
      <Footer />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      // { path: "/restaurant/:id", elememnt: <RestaurantMenu/> ,},
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
// root.render(<Applayout />);
root.render(<RouterProvider router={approuter} />);
