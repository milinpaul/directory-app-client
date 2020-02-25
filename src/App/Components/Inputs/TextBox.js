import styled from 'styled-components'

export default styled.input`
  font-size: 1.5rem;
  font-family: inherit;
  height: 4.5rem;
  width: 38rem;
  padding: 1.2rem 1.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  transition: all 0.2s;

  &:active,
  &:focus {
    outline: none;
    border: 0.1rem solid #b40e4a;
  }

  @media only screen and (max-width: 375px) {
    width: 30rem;
  }
`
