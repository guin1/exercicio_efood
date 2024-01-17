import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../components/HeaderPerfil'
import Apresentacao from '../components/ApresentacaoPerfil'
import ProdutosList from '../components/ProdutosList'
import ProdutosPerfilCard from '../components/ProdutosPerfilCard'
import Footer from '../components/Footer'
import { Restaurant } from './home'

export interface ProdutosPerfilCardProps {
  produto: Produto
}

export interface CardapioItem {
  id: number
  capa: string
  titulo: string
  preco: number
  porcao: string
}

export interface Produto {
  nome: string
  id: number
  foto: string
  titulo: string
  preco: number
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
  porcao: React.ReactNode
  name: string
}

const Perfil: React.FC = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Produto[]>([])
  const [apresentacao, setApresentacao] = useState<Restaurant>()

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await fetch(
          `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
        )
        const data = await response.json()

        setApresentacao(data)
        setCardapio(data.cardapio)
        localStorage.setItem('cardapio', JSON.stringify(data.cardapio))
        localStorage.setItem('apresentacao', JSON.stringify(data)) // Armazena a apresentação
      } catch (error) {
        console.error('Erro ao carregar cardápio:', error)
      }
    }

    const storedCardapio = localStorage.getItem('cardapio')
    const storedApresentacao = localStorage.getItem('apresentacao')

    if (!storedCardapio || !storedApresentacao) {
      fetchRestaurante()
    } else {
      setCardapio(JSON.parse(storedCardapio))
      setApresentacao(JSON.parse(storedApresentacao))
    }
  }, [id])

  return (
    <>
      <HeaderPerfil />
      {apresentacao && <Apresentacao restaurantapre={apresentacao} />}
      {cardapio.length > 0 ? (
        <ProdutosList produtos={cardapio}>
          {cardapio.map((produto) => (
            <ProdutosPerfilCard key={produto.id} produto={produto} />
          ))}
        </ProdutosList>
      ) : (
        <p>Cardápio não encontrado</p>
      )}
      <Footer />
    </>
  )
}

export default Perfil
