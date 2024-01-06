import React, { ReactNode, useEffect, useState } from 'react'
import HeaderPerfil from '../components/HeaderPerfil'
import Apresentacao from '../components/ApresentacaoPerfil'
import Footer from '../components/Footer'
import { MenuItem } from './home'
import ProdutosList from '../components/ProdutosList'

export interface ProdutosPerfilCardProps {
  produto: {
    titulo: ReactNode
    capa: string | undefined
    name: string
    image: string
    text: string
  }
}

export interface Produto {
  id: number
  capa: string
  titulo: string
  preco: number
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: MenuItem[]
  porcao: ReactNode
  name: string
}

const Perfil: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    const storedProdutos = localStorage.getItem('produtos')

    if (storedProdutos) {
      setProdutos(JSON.parse(storedProdutos))
    } else {
      fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => {
          setProdutos(res)
          localStorage.setItem('produtos', JSON.stringify(res))
        })
        .catch((error) => console.error('Erro ao carregar produtos:', error))
    }
  }, [])

  return (
    <div>
      <HeaderPerfil />
      <Apresentacao />
      <div className="container">
        <ProdutosList produtos={produtos} />
      </div>
      <Footer />
    </div>
  )
}

export default Perfil
