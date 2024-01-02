import imgapresentacao from '../../assets/images/apresentacao.png'
import {
  ContainerApresentacao,
  ContainerTexto,
  ImagemApresentacao,
  TextoItaliana,
  TextoLaDolceVita
} from './styles'

const Apresentacao = () => (
  <ContainerApresentacao>
    <ImagemApresentacao src={imgapresentacao} alt="macarrão" />
    <ContainerTexto className="container">
      <TextoItaliana>Italiana</TextoItaliana>
      <TextoLaDolceVita>La Dolce Vita Trattoria</TextoLaDolceVita>
    </ContainerTexto>
  </ContainerApresentacao>
)

export default Apresentacao
