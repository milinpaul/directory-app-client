import styled from 'styled-components'

export default styled.h2`
  align-self: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : props.theme.primaryTextColor)};
  padding-top: 2rem;
  text-transform: capitalize;
  letter-spacing: 0.125rem;
`
