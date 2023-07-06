import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
    //how to read dynamic URL params
    const {resId} = useParams();
    const [restaurant,setRestaurant] = useState({});

    useEffect(()=>{
           getRestaurantsInfo();
    },[])

    async function getRestaurantsInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data.cards[2].data.data.cards);
        setRestaurant(json.data.cards[2].data.data.cards);
    }
return (
    <div>
       <div>
          <h1>Restuarant id:{resId}</h1>
          <h2>{restaurant.name}</h2>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
          <h3>{restaurant.locality}</h3>
       </div>
       <div>
          Menu
       </div>
    </div>
)
}
export default RestaurantMenu;