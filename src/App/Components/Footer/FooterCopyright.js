import React from 'react'
import styled from 'styled-components'

const CopyrightFooterWrapper = styled.div`
  /* height: 30rem; */
  padding: 3rem 0;
  background-color: #b40e4a;
`

const FooterSection = styled.footer`
  max-width: 75%;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`

const CopyrightText = styled.h4`
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 1px;
`

const SocialIconsWrapper = styled.div`
  display: flex;
`
const Icon = styled.div``

const FooterCopyright = () => {
  return (
    <CopyrightFooterWrapper>
      <FooterSection>
        <CopyrightText>Copyright Listify Classic © 2020. All Rights Reserved</CopyrightText>
        <SocialIconsWrapper>
          <ion-icon name='logo-facebook-outline'></ion-icon>
          <Icon>Twitter</Icon>
          <Icon>Instagram</Icon>
          <Icon>Google Plus</Icon>
        </SocialIconsWrapper>
      </FooterSection>
    </CopyrightFooterWrapper>
  )
}

export default FooterCopyright
