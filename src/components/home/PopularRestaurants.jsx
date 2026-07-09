import RestaurantCard from "./RestaurantCard";

import mcd from "../../assets/images/McDonald's.png";
import papa from "../../assets/images/Papa Johns.png";
import kfc from "../../assets/images/KFC.png";
import burger from "../../assets/images/Burger King.png";
import texas from "../../assets/images/Texas Chicken.png";
import shaurma from "../../assets/images/Shaurma.png";

const restaurants = [
  {
    id: 1,
    image: mcd,
    title: "McDonald's London",
  },
  {
    id: 2,
    image: papa,
    title: "Papa Johns",
  },
  {
    id: 3,
    image: kfc,
    title: "KFC West London",
  },
  {
    id: 4,
    image: texas,
    title: "Texas Chicken",
  },
  {
    id: 5,
    image: burger,
    title: "Burger King",
  },
  {
    id: 6,
    image: shaurma,
    title: "Shaurma 1",
  },
];

function PopularRestaurants() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <h2 className="text-[16px] font-semibold mb-6">Popular Restaurants</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularRestaurants;
