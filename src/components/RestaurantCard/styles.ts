import styled from 'styled-components'
import { cores } from '../../styles'
import { Buttonn } from '../Button/styles'

export interface RestaurantCardProps {
  name: string
  cuisine: string
  image: string
}

export const CardContainer = styled.div`
  position: relative;
  display: grid;
  flex-direction: column;
  padding: 20px;
  width: 200px;
`
export const Borda = styled.div`
  padding: 1px 10px;
  border: 1px solid ${cores.rosa};
`

export const ImgRestaurant = styled.img`
  width: 470px;
  max-width: 472px;
  height: 217px;
`

export const ButtonContain = styled.div`
  position: absolute;
  top: 25px;
  left: 90%;
  display: inline-block;
  display: flex;
  gap: 5px;
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

export const ButtonItaliano = styled(Buttonn)`
  position: absolute;
  top: 25px;
  left: 370px;
`
