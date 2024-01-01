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

import { NavLink } from 'react-router-dom'

import icon from '../../assets/images/star_favorite.png'
import { Restaurant } from '../../pages/home'

interface RestaurantCardProps {
  restaurant: Restaurant
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => (
  <CardContainer>
    <ImgRestaurant src={restaurant.capa} alt={restaurant.titulo} />
    <Borda>
      <TituloText>
        <div>
          {restaurant.titulo}
          <span>{restaurant.avaliacao}</span>
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
      <Text>{restaurant.descricao}</Text>
      <NavLink to="/perfil">
        <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
      </NavLink>
    </Borda>
  </CardContainer>
)

export default RestaurantCard
