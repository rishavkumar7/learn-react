import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "./../utils/constants";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantData, setRestaurantData] = useState();
    const [menuList, setMenuList] = useState([]);
    
    useEffect(() => {
        fetchRestaurantData();
    }, []);

    useEffect(() => {
        updateMenuList();
    }, [restaurantData]);

    const fetchRestaurantData = async () => {
        const resData = await fetch(RESTAURANT_URL + resId);
        const resDataJson = await resData.json();
        setRestaurantData(resDataJson);
        console.log(resDataJson);
    };

    const updateMenuList = () => {
        restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.every(card => {
            if (card?.card?.card?.itemCards?.length > 0) {
                setMenuList(card?.card?.card?.itemCards);
                return false;
            }
            return true;
        });
    };

    return (
        <div>
            <h1>{ restaurantData?.data?.cards[2]?.card?.card?.info?.name }</h1>
            <ul>
                { menuList.map(item => <li key={ item?.card?.info?.id }>{ item?.card?.info?.name }</li>) }
            </ul>
        </div>
    );
};

export default RestaurantMenu;