import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "./../utils/constants";

const Body = () => {
    const [resData, setResData] = useState([]);
    const [filteredResData, setFilteredResData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);
        const jsonData = await data.json();
        setResData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResData(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(resData);
    };

    return (resData?.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filterButton">
                <div className="searchField">
                    <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}></input>
                    <button onClick={() => {setFilteredResData(resData.filter(res => (res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))));}}>Search</button>
                </div>
                <button onClick={() => {setFilteredResData(resData.filter(res => res?.info?.avgRating >= 4.0))}}>Top Rated Restaurants</button>
            </div>
            <div className="restaurantContainer">
                { filteredResData?.map(restaurant => <Link key={restaurant?.info?.id} to={"./restaurants/" + restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>) }
            </div>
        </div>
    );
};

export default Body;