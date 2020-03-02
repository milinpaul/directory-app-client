import React from 'react'
import styled from 'styled-components'

import MobileLinks from './MobileLinks'

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background: ${(props) => props.theme.primaryColor};
  z-index: 1000;
  overflow-x: hidden;
`

const IconWrapper = styled.div`
  /* position: relative; */
`

const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.5rem 1.5rem;
  ion-icon {
    font-size: 4rem;
    color: #fff;
  }
`

const MenuLinkWrapper = styled.div``

const index = () => {
  return (
    <MobileMenuWrapper>
      <IconWrapper>
        <CloseIcon>
          <ion-icon name='close-outline'></ion-icon>
        </CloseIcon>
      </IconWrapper>
      <MenuLinkWrapper>
        <MobileLinks />
      </MenuLinkWrapper>
    </MobileMenuWrapper>
  )
}

export default index
