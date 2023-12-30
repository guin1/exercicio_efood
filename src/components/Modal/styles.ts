import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cores.rosa};
  height: 344px;
  padding: 20px;
  width: 1024px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (max-width: 768px) {
    height: 450px;
    width: 700px;
  }
`
export const ContainerOverlay = styled.div`
  background-color: #000000cc;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
export const Excluir = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ModalImage = styled.img`
  border-radius: 8px;
  width: 280px;
  height: 280px;
`

export const ModalText = styled.div`
  padding: 15px;
`

export const ModalTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${cores.branca};
`

export const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: ${cores.branca};
`

export const ModalCloseButton = styled.button`
  background-color: ${cores.branca};
  color: ${cores.rosa};
  font-size: 16px;
  border: none;
  padding: 4px;
  margin-top: 35px;
  cursor: pointer;
`
