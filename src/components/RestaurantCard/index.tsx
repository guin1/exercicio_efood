import React from 'react'
import {
  Borda,
  ButtonContain,
  ButtonItaliano,
  ButtonSaibaMais,
  CardContainer,
  ImgRestaurant,
  Text,
  TituloText
} from './styles'
import { Buttonn } from '../Button/styles'
import Restaurant from '../../models/Restaurant'

import icon from '../../assets/images/star_favorite.png'

interface RestaurantCardProps {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => (
  <CardContainer className="restaurant-card">
    <ImgRestaurant src={restaurant.image} alt={restaurant.name} />
    <Borda>
      <TituloText>
        <div>
          {restaurant.name}
          <span>{restaurant.nota}</span>
          <img src={icon} alt="IconEstrela" />
        </div>
      </TituloText>
      {restaurant.id === 1 ? (
        <ButtonContain>
          <Buttonn>destaque da semana</Buttonn>
          <Buttonn>japones</Buttonn>
        </ButtonContain>
      ) : (
        <ButtonItaliano>italiana</ButtonItaliano>
      )}
      <Text>{restaurant.text}</Text>
      <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
    </Borda>
  </CardContainer>
)

export default RestaurantCard
