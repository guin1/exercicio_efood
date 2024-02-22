import { HeaderBar, HeaderText, LogoImage } from './styles'

import logo from '../../assets/images/logo.png'

const HeaderHome = () => (
  <HeaderBar>
    <div>
      <LogoImage src={logo} alt="Efood" />
      <HeaderText>
        Viva experiências gastronômicas
        <br />
        no conforto da sua casa
      </HeaderText>
    </div>
  </HeaderBar>
)

export default HeaderHome
