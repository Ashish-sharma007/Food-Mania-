import { useState } from "react";
import { useEffect } from "react";
import { IMG_CDN } from "../constant";
import {useParams} from 'react-router-dom';

import Shimmer from "./Shimmer";
const MealData = () => {


const {id} = useParams();
console.log({id})
 
const [ restaurantMeals, setRestaurantMeals] = useState(null);

useEffect(()=> {
    getMealsInfo ();
},[])

async function getMealsInfo () {

    const data = await fetch ('https://www.swiggy.com/dapi/menu/v4/full?lat=29.3909464&lng=76.9635023&menuId='+id)
    const json = await data.json();
    console.log(json.data)
    setRestaurantMeals(json.data);

}

  return (!restaurantMeals)? <Shimmer/> : (
    <div>
    <div className="font-bold">
    <h1> Restaurant id : {id}</h1>
    <h1>{restaurantMeals.name}</h1>
    <img src={IMG_CDN + restaurantMeals.cloudinaryImageId} alt="" />

    <h1>{restaurantMeals.area}</h1>
    <h1>{restaurantMeals.city}</h1>
    <h1>{restaurantMeals.avgRating}</h1>
    <h1>{restaurantMeals.costForTwoMsg
}</h1>
</div>

<div><h1>Menu</h1>
<ul>{
    Object.values(restaurantMeals?.menu?.items).map((item) =>(
        <li key = {item.id} className = 'flex justify-center'>{item.name} </li>
    ))
}

</ul>
</div>
    </div>

  );
};

export default MealData;
