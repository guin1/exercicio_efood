import styled from 'styled-components'
import { cores } from '../../styles'

export interface RestaurantCardProps {
  name: string
  cuisine: string
  image: string
}

export const CardContainer = styled.div`
  position: relative;
  display: grid;
  max-width: 472px;
  flex-direction: column;
  padding: 20px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100px;
    margin: 0 auto;
  }
`
export const Borda = styled.div`
  padding: 1px 10px;
  border: 1px solid ${cores.rosa};
`

export const ImgRestaurant = styled.img`
  width: 470px;
  height: 217px;

  @media (max-width: 768px) {
    width: 300px;
  }
`

export const ButtonContain = styled.button`
  position: absolute;
  top: 28px;
  border: none;
  right: -190px;
  display: inline-block;
  margin-bottom: 10px;
  white-space: nowrap;
`
export const ButtonSaibaMais = styled.button`
  margin-bottom: 10px;
  white-space: nowrap;
  width: 82px;
  height: 24px;
  background-color: ${cores.rosa};
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 24px;
`
export const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  width: 100%;
  color: ${cores.rosa};
`
export const TituloText = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: ${cores.rosa};
  margin-bottom: 10px;
  margin-top: 21px;

  div {
    display: flex;
    align-items: center;
    max-width: 100%;

    span {
      display: flex;
      align-items: center;
      margin-right: 5px;
      margin-left: auto;
      font-size: 18px;

      img {
        margin-left: 5px;
        width: 55px;
        height: 21px;
      }
    }
  }
`

export const ButtonItaliano = styled.button`
  position: absolute;
  top: 28px;
  right: -280px;
  padding: 8px 16px;
  background-color: #e66767;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
`
