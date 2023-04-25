// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`
export const ButtonEle = styled.button`
  border-radius: 6px;
  background-color: #ededed;
  opacity: ${props => props.bgOpacity};
  padding: 6px 20px 6px 20px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  border: none;
`
