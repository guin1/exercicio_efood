import React, { useEffect, useState } from 'react'
import RestaurantList from '../components/RestaurantList'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'

export interface MenuItem {
  id: number
  foto: string
  preco: number
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
      .catch((error) => console.error('Erro ao carregar Restaurante:', error))

    return () => {
      // Limpar o localStorage ao desmontar o componente
      localStorage.removeItem('cardapio')
    }
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
