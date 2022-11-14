import styled from 'styled-components'

interface Props {
  color: string;
  shape: string;
}


export const StyledCell = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  background-color: #${props => {
    return props.color
  }};
  border-radius: ${props => props.shape == "circle" ? "50%" : "0"};
`