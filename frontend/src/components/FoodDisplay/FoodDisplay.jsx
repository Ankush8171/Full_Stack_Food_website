import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list, url } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
  {food_list
    .filter(
      item =>
        category === "All" ||
        category.toLowerCase() === item.category.toLowerCase()
    )
    .map((item) => (
      <FoodItem
        key={item._id}
        id={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        image={item.image}
      />
    ))}
</div>
    </div>
  )
}

export default FoodDisplay