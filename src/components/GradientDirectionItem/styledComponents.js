// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
`
export const ChangeButton = styled.button`
  color: #000000;
  background-color: #ffffff;
  padding: 15px;
  border-width: 0px;
  width: 90px;
  border-radius: 6px;
  opacity: ${props => (props.activeButtonId ? 1 : 0.5)};
`
