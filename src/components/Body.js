import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "./../utils/mockData";

const Body = () => {
    const arr = useState(restaurantData);

    return (
        <div className="body">
            <div className="filterButton">
                <button onClick={() => {arr[1](arr[0].filter(res => res.card.card.info.avgRating >= 4.0))}}>Top Rated Restaurants</button>
            </div>
            <div className="restaurantContainer">
                { arr[0].map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />) }
            </div>
        </div>
    );
};

export default Body;