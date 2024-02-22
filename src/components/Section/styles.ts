import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 32px;
  margin-right: auto;
  margin-bottom: 32px;

  h2 {
    margin-bottom: 10px;
    background: transparent;
  }
  p {
    background-color: ${colors.branca};
    padding: 8px;
  }

  div {
    margin-bottom: 20px;

    padding: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const ContainerPerfil = styled.img`
  heigth: 150px;
  width: 200px;
  border-radius: 80%;
  margin-left: auto;
  display: flex;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: auto;
    margin-top: 16px;
  }
`
export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  button {
    border: none;
    padding: 8px 15px;
    margin-right: 8px;
    margin-top: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 32px;

    h3 {
      color: #718093;
      margin-bottom: 16px;
      padding: auto;
    }
  }
`

export const ProjectCard = styled.div`
  background-color: ${colors.branca};
  padding: 8px;
`
export const SectionContato = styled.div`
  margin-top: 32px;

  h2 {
    margin-bottom: 16px;
  }

  label {
    display: grid;
    gap: 8px;

    h4 {
      color: #718093;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    textarea {
      resize: vertical;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    label {
      grid-template-columns: 1fr;
    }
  }
`
export const Titulo = styled.h2`
  backgorund-color: ${colors.black};
  color: ${colors.branca};
  margin-bottom: 8px;
`
