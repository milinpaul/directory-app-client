import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLinks from './NavLinks'
import MenuIcon from '../Icons/MenuIcon'
import MobileMenu from '../MobileMenu'

const Navbar = styled.nav`
  width: 100%;
  background: ${(props) => props.theme.primaryColor};
  height: 7.5rem;
`

const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
  height: 100%;
`

const Index = () => {
  return (
    <Navbar>
      <WrapperContainer>
        <Logo />
        <NavLinks />
        <MenuIcon />
      </WrapperContainer>
      <MobileMenu />
    </Navbar>
  )
}

export default Index
