import styled from 'styled-components'

export default styled.button`
  font-size: 1.7rem;
  color: #ffffff;
  border: none;
  background-color: ${(props) => props.theme.primaryButtonColor};
  padding: 2rem 3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:active,
  &:hover {
    outline: none;
    background-color: #b40e4a;
    transform: translateY(-0.5rem);
  }

  @media only screen and (max-width: 375px) {
    padding: 2rem 3rem;
    font-size: 1.3rem;
  }
`
