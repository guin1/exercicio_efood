import Apresentacao from '../components/ApresentacaoPerfil'
import HeaderPerfil from '../components/HeaderPerfil'
import Produto from '../models/Produto'
import pizza from '../assets/images/pizza.png'
import ProdutosList from '../components/ProdutosList'
import Footer from '../components/Footer'

const MeusProdutos: Produto[] = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  },
  {
    id: 2,
    name: 'Pizza Calabresa',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  },
  {
    id: 3,
    name: 'Pizza Marguerita',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  },
  {
    id: 4,
    name: 'Pizza Marguerita',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  },
  {
    id: 5,
    name: 'Pizza Marguerita',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  },
  {
    id: 6,
    name: 'Pizza Marguerita',
    text: `A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!!!`,
    image: pizza
  }
]

const Perfil: React.FC = () => (
  <div>
    <HeaderPerfil />
    <Apresentacao />
    <div className="container">
      <ProdutosList produtos={MeusProdutos} />
    </div>
    <Footer />
  </div>
)

export default Perfil
