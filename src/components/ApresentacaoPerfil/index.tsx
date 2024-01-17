// import imgapresentacao from '../../assets/images/apresentacao.png'
import { Restaurant } from '../../pages/home'
import {
  ContainerApresentacao,
  ContainerTexto,
  ImagemApresentacao,
  TextoItaliana,
  TextoLaDolceVita
} from './styles'

export interface ApresentacaoProps {
  restaurantapre: Restaurant
}

const Apresentacao: React.FC<ApresentacaoProps> = ({ restaurantapre }) => {
  return (
    <ContainerApresentacao>
      {restaurantapre && (
        <>
          <ImagemApresentacao
            src={restaurantapre.capa}
            alt={restaurantapre.titulo}
          />
          <ContainerTexto className="container">
            <TextoItaliana>{restaurantapre.tipo}</TextoItaliana>
            <TextoLaDolceVita>{restaurantapre.titulo}</TextoLaDolceVita>
          </ContainerTexto>
        </>
      )}
    </ContainerApresentacao>
  )
}

export default Apresentacao
