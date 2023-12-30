import React from 'react'
import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { GridContainer, RestaurantListProps } from './styles'

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
