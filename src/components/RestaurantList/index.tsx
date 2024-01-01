import React from 'react'
import RestaurantCard from '../RestaurantCard'
import { GridContainer, RestaurantListProps } from './styles'
import { Restaurant } from '../../pages/home'

const RestaurantList: React.FC<RestaurantListProps> = ({
  title,
  restaurants
}) => (
  <div>
    <h2>{title}</h2>
    <GridContainer>
      {restaurants.map((restaurant: Restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </GridContainer>
  </div>
)

export default RestaurantList
