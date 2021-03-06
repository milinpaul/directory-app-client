import styled from 'styled-components'

export default styled.h2`
  align-self: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.primaryTextColor};
  padding-top: 2rem;
  text-transform: capitalize;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    height: 0.2rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 50%;
    bottom: -1.5rem;
    background-color: ${(props) => props.theme.primaryColor};
    transition: all 0.5s;
  }

  &:hover::after {
    width: 80%;
  }

  @media only screen and (max-width: 375px) {
    font-size: 1.6rem;
  }
`
