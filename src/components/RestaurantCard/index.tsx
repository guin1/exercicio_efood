import { NavLink } from 'react-router-dom'

import icon from '../../assets/images/star_favorite.png'
import { Restaurant } from '../../pages/home'
import {
  Borda,
  ButtonContain,
  Text,
  ButtonItaliano,
  ButtonSaibaMais,
  CardContainer,
  ImgRestaurant,
  TituloText
} from './styles'
import { Buttonn } from '../Button/styles'

export interface RestaurantCardProps {
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

      <NavLink to={`/perfil/${restaurant.id}`}>
        {restaurant.destacado ? (
          <ButtonContain>
            <Buttonn>Destaque da semana</Buttonn>
          </ButtonContain>
        ) : null}
        <div>
          {restaurant.tipo && (
            <ButtonItaliano>{restaurant.tipo}</ButtonItaliano>
          )}
        </div>
      </NavLink>

      <Text>{restaurant.descricao}</Text>
      <NavLink to={`/perfil/${restaurant.id}`}>
        <ButtonSaibaMais>Saiba mais</ButtonSaibaMais>
      </NavLink>
    </Borda>
  </CardContainer>
)

export default RestaurantCard
