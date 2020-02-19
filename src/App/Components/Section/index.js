import styled from 'styled-components'

export default styled.section`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#ccc')};
  padding: 3rem;
  width: 100%;
`
