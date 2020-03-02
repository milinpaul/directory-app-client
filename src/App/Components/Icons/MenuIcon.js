import React from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  ion-icon {
    font-size: 4rem;
    color: #fff;
  }
  display: none;

  @media only screen and (max-width: 720px) {
    display: block;
  }
`

const MenuIcon = () => {
  return (
    <Icon>
      <ion-icon name='menu-outline'></ion-icon>
    </Icon>
  )
}

export default MenuIcon
