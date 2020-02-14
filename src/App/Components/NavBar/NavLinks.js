import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navlinks = styled.ul`
  display: flex;
  list-style: none;
  margin: auto;
`

const StyledLink = styled(Link)`
  padding: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    background: #8f2d56;
  }
`

const NavLinks = () => {
  return (
    <Navlinks>
      <li>
        <StyledLink to='#'>Home</StyledLink>
      </li>
      <li>
        <StyledLink to='#'>Listing</StyledLink>
      </li>
      <li>
        <StyledLink to='#'>About</StyledLink>
      </li>
    </Navlinks>
  )
}

export default NavLinks
