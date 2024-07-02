import { restaurantList } from "../utils/contants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStataus from "../utils/useOnlineStatus";

const FilterData = (searchText, restaurants) => {
  const val = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log("val", val);
  return val;
};
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getrestaurant();
  }, []);

  async function getrestaurant(params) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%22"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("render");
  console.log("allRestaurants", allRestaurants);
  console.log("filteredRestaurants", filteredRestaurants);

  //early return , when you have no resturant don't return anything: this is you can avoid rendering componenet
  // if(!allRestaurants) return null;
  // if(filteredRestaurants?.length===0)
  //   return <h1> No record matching</h1>
  
 const onlineStatus = useOnlineStataus();
  if(onlineStatus === false) return <h1>Opps! Looks like you are Offline.</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          className="Search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            //filter data
            const data = FilterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((resturant) => {
          return (
            <Link to={"/restaurant/"+resturant?.info?.id}  key={resturant?.info?.id}>
              <RestaurantCard {...resturant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;

// import { restaurantList } from "../contants";
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

// const FilterData = (searchText, restaurants) => {
//   return restaurants.filter((restaurant) =>
//     restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
//   );
// };
// const Body = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   // const [val, setVal]= useState(false);

//   useEffect(() => {
//     getrestaurant();
//   }, []);

//   async function getrestaurant(params) {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%22"
//     );
//     const json = await data.json();
//     console.log(json);
//     setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//   }

//   console.log(restaurants);
//   console.log("render");
//   return (
//     <>
//       <div>
//         <input
//           className="Search-input"
//           type="text"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         ></input>

//         <button
//           onClick={() => {
//             //filter data
//             const data = FilterData(searchText, restaurants);
//             setRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="restaurant-list">
//         {restaurants.map((resturant, ) => {
//           return <RestaurantCard {...resturant.info} key={resturant?.info?.id} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;
