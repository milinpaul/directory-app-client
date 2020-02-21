import styled from 'styled-components'

export default styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 375px) {
    max-width: 100%;
  }
`
