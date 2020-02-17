import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './NavLinks'

const Navbar = styled.nav`
  width: 100%;
  background: ${(props) => props.theme.primaryColor};
  height: 7.5rem;
`

const WrapperContainer = styled.div`
  display: grid;
  max-width: 70%;
  margin: auto;

  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: 7.5rem; */
  height: 100%;
  align-items: center;
`

const Index = () => {
  return (
    <Navbar>
      <WrapperContainer>
        <Logo />
        <NavLinks />
      </WrapperContainer>
    </Navbar>
  )
}

export default Index
