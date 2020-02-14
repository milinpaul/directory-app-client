import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './NavLinks'

const Navbar = styled.nav`
  width: 100%;
  background: #d81159;
  height: 7.5rem;
`

const WrapperContainer = styled.div`
  display: grid;
  max-width: 120rem;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
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