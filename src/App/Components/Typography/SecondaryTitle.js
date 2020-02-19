import styled from 'styled-components'

export default styled.h3`
  align-self: center;
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.secondaryTextColor};
  text-transform: capitalize;
  letter-spacing: 0.125rem;
`
