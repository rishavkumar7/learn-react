import { RESTAURANT_CARD_CDN_URL } from "./../utils/constants";

const RestaurantCard = (props) => {
    const restaurantInfo = props?.resData?.info;
    return (
        <div className="restaurantCard">
            <div>
                <img className="restaurantCardImage" src={ RESTAURANT_CARD_CDN_URL + restaurantInfo?.cloudinaryImageId }/>
            </div>
            <div className="restaurantCardBody">
                <h2>{restaurantInfo?.name}</h2>
                <h3>{restaurantInfo?.costForTwo}</h3>
                <h5>{restaurantInfo?.sla?.deliveryTime} minutes away</h5>
                <h5>{restaurantInfo?.avgRating} ⭐</h5>
            </div>
        </div>
    );
};

export default RestaurantCard;