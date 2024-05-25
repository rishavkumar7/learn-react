import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
    return (
        <div>
            <div className="filterButton">
                <div className="searchField">
                    <input type="text"></input>
                    <button>Search</button>
                </div>
                <button>Top Rated Restaurants</button>
            </div>
            <div className="restaurantContainer">
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </div>
        </div>
    )
};

export default Shimmer;