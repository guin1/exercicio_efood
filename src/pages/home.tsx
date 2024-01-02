import React, { useState, useEffect } from 'react'

import RestaurantList from '../components/RestaurantList'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'

interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

const Home: React.FC = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <div>
      <HeaderHome />
      <div className="container">
        <RestaurantList title="" restaurants={restaurantes} />
      </div>
      <Footer />
    </div>
  )
}

export default Home
