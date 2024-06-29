import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // const val = useParams();
  // const {id}= val;

  //you can destructure on the fly like this
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  if (restaurant === null) return <Shimmer />;

  const { name } = restaurant?.data?.cards[2]?.card?.card?.info;
 
  const  {itemCards}  =
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      .card.card.itemCards ? restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      .card.card : restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      .card.card.categories[0];

  console.log(
    "itemCards:",
    restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
      .card.card.itemCards
  );
  return (
    <>
      <div>
        <h1>{name} </h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card?.info?.id}>{item.card?.info?.name} - {item.card?.info?.price/100}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
