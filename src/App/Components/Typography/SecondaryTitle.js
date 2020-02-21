import styled from 'styled-components'

export default styled.h3`
  align-self: center;
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : props.theme.primaryTextColor)};
  text-transform: capitalize;
  letter-spacing: 0.125rem;

  @media only screen and (max-width: 375px) {
    font-size: 1.7rem;
    letter-spacing: 0rem;
    text-align: center;
  }
`
