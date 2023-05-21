import ItemCard from "./ItemCard";
import { restaurantList } from "../constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.3909464&lng=76.9635023&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setFilterRestaurants(json.data?.cards[2]?.data?.data?.cards);
    setRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }

  return (restaurants.length === 0 ) ? <Shimmer/> :  (
    <>
      <div className="flex pl-6 pt-4">
        <input
          className=" border-2 border-black"
          type="text"
          placeholder="search food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className=" border -2 border-blue-500 m-2 p-2"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilterRestaurants(data);
          }}
        >
          {" "}
          Search
        </button>
      </div>

      <div className="flex m-4 flex-wrap ">
      {filterRestaurants.map((restaurant) => {
          return (<Link to ={"/restaurant/" + restaurant.data.id } key={restaurant.data.id} > <ItemCard {...restaurant.data}   />  </Link> ); 
        })} 
      </div>
    </>
  );
};

export default Body;
