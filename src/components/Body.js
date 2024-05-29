import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const FilterData=(searchText, restaurants)=>{
  return restaurants.filter((restaurant)=>
    restaurant.data.name.includes(searchText)
  )

}
const Body = () => {
  const[restaurants, setRestaurants]= useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  // const [val, setVal]= useState(false);

  
  return (
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
            const data = FilterData(searchText, restaurants);
            setRestaurants(data);
          
          }}
        >
          Search
        </button>
   
      </div>
      <div className="restaurant-list">
        {restaurants.map((resturant) => {
          return <RestaurantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

// import { restaurantList } from "../contants";
// import RestaurantCard from "./RestaurantCard";
// import { useState } from "react";

// const Body = () => {
//   const [searchText, setsearchText] = useState("Search");
//   const [searchVal, setsearchVal] = useState("false");

//   return (
//     <>
//       <div>
//         <input
//           className="Searchbar"
//           type="text"
//           placeholder="abc"
//           value={searchText}
//           onChange={(e) => {
//             setsearchText(e.target.value);
//           }}
//         ></input>

//         <h1>{searchText}</h1>
//         <button
//           onClick={() => {
//             // setsearchVal("true");
//             if(searchVal=== "true")
//               setsearchVal("false");
//             else
//             setsearchVal("true");
//           }}
//         >
//           Search
//         </button>
//         <h1>{searchVal}</h1>
//       </div>
//       <div className="restaurant-list">
//         {restaurantList.map((resturant) => {
//           return <RestaurantCard {...resturant.data} key={resturant.data.id} />;
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;
