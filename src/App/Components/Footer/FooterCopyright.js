import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CopyrightFooterWrapper = styled.div`
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
  align-items: center;
  justify-items: center;
`
const StyledLink = styled(Link)`
  cursor: pointer;
  transition: all 0.2s;

  ion-icon {
    font-size: 2rem;
    padding-right: 1rem;
    color: #fff;

    &:hover {
      transform: scale(1.2);
      opacity: 0.7;
    }
  }
`

const FooterCopyright = () => {
  return (
    <CopyrightFooterWrapper>
      <FooterSection>
        <CopyrightText>Copyright Listify Classic © 2020. All Rights Reserved</CopyrightText>
        <SocialIconsWrapper>
          <StyledLink to='#'>
            <ion-icon title='Facebook' name='logo-facebook'></ion-icon>
          </StyledLink>
          <StyledLink to='#'>
            <ion-icon title='Twitter' name='logo-twitter'></ion-icon>
          </StyledLink>
          <StyledLink to='#'>
            <ion-icon title='Instagram' name='logo-instagram'></ion-icon>
          </StyledLink>
          <StyledLink to='#'>
            <ion-icon title='Google Plus' name='logo-google'></ion-icon>
          </StyledLink>
        </SocialIconsWrapper>
      </FooterSection>
    </CopyrightFooterWrapper>
  )
}

export default FooterCopyright
