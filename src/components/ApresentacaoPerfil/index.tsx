import imgapresentacao from '../../assets/images/apresentacao.png'
import {
  ContainerApresentacao,
  ImagemApresentacao,
  TextoItaliana,
  TextoLaDolceVita
} from './styles'

const Apresentacao = () => (
  <ContainerApresentacao>
    <ImagemApresentacao src={imgapresentacao} alt="macarrão" />
    <TextoItaliana>Italiana</TextoItaliana>
    <TextoLaDolceVita>La Dolce Vita Trattoria</TextoLaDolceVita>
  </ContainerApresentacao>
)

export default Apresentacao
