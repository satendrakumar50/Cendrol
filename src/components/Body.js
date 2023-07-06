import RestaurantCard from "./RestaurantCard";
import  { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText,allRestaurants){
    const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));

    return filterData;
}
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // API call
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2161394&lng=77.390219&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
   // Conditional Rendering
   //if restaurant is empty ==> shimmer UI
   // else show actual UI

   // not rendering component(early return)
   if(!allRestaurants) return null;

    // if(filteredRestaurants?.length == 0 ) 
    //   return <h1>No Restaurant Found !!</h1>;

    return (allRestaurants?.length == 0 ) ? ( <Shimmer /> ) : (
        <>
           <div className="search-container">
            <input 
            type="text" 
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}
            />
            <button
                className="search-btn" 
                onClick={() =>{
                const data=filterData(searchText,allRestaurants);
                setFilteredRestaurants(data);
            }}
            > Search
            </button>
           </div>
           <div className="restaurant-list">
             {
            filteredRestaurants.map((restaurant) => {
             return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id}/>
             );
            })}
            </div>
        </>  
   );
};

export default Body;