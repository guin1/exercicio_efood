import React from 'react'
import RestaurantList from '../components/RestaurantList'
import Restaurant from '../models/Restaurant'
import sushi from '../assets/images/sushi.png'
import macarracao from '../assets/images/macarrao.png'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'

const restaurantsList1: Restaurant[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    text: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    assessment: 4.5,
    nota: '4.9'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarracao,
    assessment: 4.0,
    nota: '4.9'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarracao,
    assessment: 3.5,
    nota: '4.9'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarracao,
    assessment: 4.2,
    nota: '4.9'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarracao,
    assessment: 4.2,
    nota: '4.9'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    text: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarracao,
    assessment: 4.2,
    nota: '4.9'
  }
]

const Home: React.FC = () => (
  <div>
    <HeaderHome />
    <div className="container">
      <RestaurantList title="" restaurants={restaurantsList1} />
      <Footer />
    </div>
  </div>
)

export default Home
