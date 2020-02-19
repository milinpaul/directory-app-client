import styled from 'styled-components'

export default styled.button`
  font-size: 1.5rem;
  color: #ffffff;
  border: none;
  background-color: ${(props) => props.theme.primaryButtonColor};
  padding: 1rem 5rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #b40e4a;
  }

  @media only screen and (max-width: 375px) {
    padding: 1rem 3rem;
  }
`
