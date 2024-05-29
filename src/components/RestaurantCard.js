import { IMG_CDN_URL } from "../contants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
}) => {
  //object destructuring
  // const {cloudinaryImageId,name,cuisines,avgRating} = props.restaurant.data;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoString}</h4>
      {/* <h4>{avgRating}</h4> */}
    </div>
  );
};

export default RestaurantCard;
