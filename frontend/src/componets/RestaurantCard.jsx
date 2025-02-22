
import { Link } from 'react-router-dom';

// Main component (default export)
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <p>{restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating}</p>
      <Link to={`/restaurant/${restaurant._id}`}>View Menu</Link>
    </div>
  );
};

// Named export for MenuItem (secondary component)
export const MenuItem = () => {
  return (
    <div className="menu-item">
      {/* Add your menu item JSX here */}
    </div>
  );
};

// Only ONE default export allowed per file
export default RestaurantCard;