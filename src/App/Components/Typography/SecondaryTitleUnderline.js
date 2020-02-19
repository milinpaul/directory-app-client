import styled from 'styled-components'

export default styled.h3`
  align-self: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.secondaryTextColor};
  text-transform: capitalize;
  letter-spacing: 0.125rem;
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
`
