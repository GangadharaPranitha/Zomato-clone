import  { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantCard from './RestaurantCard';
// Import the default export (RestaurantCard) and named export (MenuItem)





const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get('/api/restaurants');
        setRestaurants(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="home">
      <h1>Popular Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
// Use them in your JSX:
