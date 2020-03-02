import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navlinks = styled.ul`
  display: flex;
`

const StyledLink = styled(Link)`
  padding: 3rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    background: #b40e4a;
  }
`

const MobileLinks = () => {
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

export default MobileLinks
