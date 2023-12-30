import styled from 'styled-components'
import { cores } from '../../styles'
import Restaurant from '../../models/Restaurant'

export interface RestaurantListProps {
  title: string
  restaurants: Restaurant[]
}
export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  border: ${cores.rosa};
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`
