import RestaurantCard from "./RestaurantCard";
import restaurantData from "./../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="searchBar">
                Search
            </div>
            <div className="restaurantContainer">
                { restaurantData.map(restaurant => <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />) }
            </div>
        </div>
    );
};

export default Body;