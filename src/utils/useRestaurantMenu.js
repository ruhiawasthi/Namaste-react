import { MENU_API } from "./contants";
import { useState, useEffect } from "react";


const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setRestaurant(json);
  };
  return restaurant;
};

export default useRestaurantMenu;
