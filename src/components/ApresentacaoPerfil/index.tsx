// import imgapresentacao from '../../assets/images/apresentacao.png'
import { Restaurant } from '../../pages/home'
import {
  ContainerApresentacao,
  ContainerTexto,
  ImageContainer,
  ImagemApresentacao,
  Overlay,
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
          <ImageContainer>
            <ImagemApresentacao
              src={restaurantapre.capa}
              alt={restaurantapre.titulo}
            />
            <Overlay />
          </ImageContainer>

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
