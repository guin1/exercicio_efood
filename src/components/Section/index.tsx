import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
  ContainerPerfil,
  ProjectCard,
  ProjectGrid,
  SectionContato,
  SectionWrapper,
  Titulo
} from './styles'
import perfil from '../../assets/images/perfil.jpeg'
// import efood from '../../assets/images/efood.png'
// import jquery from '../../assets/images/jquery1.png'
// import sorteador from '../../assets/images/sorteador.png'
// import tarefas from '../../assets/images/tarefas.png'

const Section = () => {
  const projects = [
    {
      // imageUrl: efood,
      title: 'Projeto Efood - Comida',
      description:
        'Este é um projeto fictício de um aplicativo de delivery de comida, criado com o uso de APIs. O aplicativo é responsivo e foi desenvolvido para funcionar perfeitamente em todos os modelos de celulares e tablets. As principais ferramentas utilizadas para o desenvolvimento incluem React, TypeScript, Yup e Formik.',
      buttons: [
        'https://github.com/seu-usuario/projeto-efood',
        'https://www.efood.com.br/'
      ]
    },
    {
      // imageUrl: jquery,
      title: 'Projeto Vue.js - Calculadora',
      description:
        'Desenvolvi um projeto simples utilizando Vue.js: uma calculadora intuitiva. Nessa aplicação, você pode selecionar a operação desejada, e a calculadora realiza automaticamente o cálculo correspondente. Uma solução prática e eficiente para suas necessidades de cálculos diários.',
      buttons: [
        'https://github.com/seu-usuario/projeto-vuejs',
        'https://vuejs.org/'
      ]
    },
    {
      // imageUrl: sorteador,
      title: 'Projeto Bootstrap - Carros',
      description:
        'Apresento um projeto fictício de um site de loja de carros, totalmente desenvolvido em Bootstrap. A página conta com um carrossel envolvente, destacando os modelos disponíveis. Na seção "Sobre os Carros", oferecemos informações detalhadas sobre características e desempenho. Além disso, destacamos alguns carros em destaque, proporcionando uma visão completa da diversidade de modelos disponíveis. Explore essa experiência única e descubra o mundo automotivo de maneira inovadora!',
      buttons: [
        'https://github.com/seu-usuario/projeto-bootstrap',
        'https://getbootstrap.com/'
      ]
    },
    {
      // imageUrl: tarefas,
      title: 'Projeto com Gulp - Sorteio ',
      description:
        'Este projeto emprega o Gulp como ferramenta principal, proporcionando uma experiência simplificada e eficiente. Uma funcionalidade destacada é a capacidade de realizar sorteios com números definidos por nós. Experimente agora e teste essa incrível funcionalidade!',
      buttons: [
        'https://github.com/seu-usuario/projeto-gulp',
        'https://gulpjs.com/'
      ]
    }
  ]

  return (
    <>
      <SectionWrapper>
        <ContainerPerfil src={perfil} alt="Foto de Perfil" />

        <div>
          <Titulo>Sobre:</Titulo>
          <p>
            Iniciei minha jornada aos 14 anos, trabalhando na construção civil
            com meu pai. Essa experiência me ensinou a ser perspicaz, ágil,
            criativo, a trabalhar sob pressão e em equipe, além de desenvolver
            habilidades eficazes de comunicação. Após realizar um serviço para
            um programador, descobri meu interesse pelos códigos e decidi
            explorar a área de front-end. Aprendi gradualmente HTML, CSS e
            JavaScript.
            <br />
            <br /> Impulsionado por meu entusiasmo pela programação de
            interfaces de sites, busquei aprofundar meus conhecimentos,
            iniciando meus estudos como Engenheiro Front-End. Recebi
            qualificação pela EBAC, onde realizei cursos especializados em
            front-end, adquirindo proficiência em linguagens como Sass, Less,
            HTML5, CSS, JavaScript, React, jQuery e Bootstrap.
            <br />
            <br />
            Diariamente, dedico-me a solucionar desafios de forma eficiente e
            aprimorar minhas habilidades em front-end.
          </p>
        </div>
      </SectionWrapper>

      <Titulo>Projetos:</Titulo>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <a
                href={project.buttons[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Repositório</button>
              </a>
              <a
                href={project.buttons[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Site</button>
              </a>
            </div>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <SectionContato>
        <Titulo>Entre em contato:</Titulo>
        <label>
          <h4>Nome:</h4>
          <input type="text" />
          <h4>E-mail:</h4>
          <input type="email" />
          <h4>Número:</h4>
          <input type="number" />
          <h4>Mensagem:</h4>
          <textarea />
        </label>
      </SectionContato>
    </>
  )
}

export default Section
