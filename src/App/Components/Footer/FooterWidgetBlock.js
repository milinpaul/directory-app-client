import React from 'react'
import styled from 'styled-components'
import Logo from '../NavBar/Logo'

import { Link } from 'react-router-dom'

const FooterSection = styled.footer`
  max-width: 75%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  justify-content: center;
  justify-items: center;
  color: #fff;
`

const FooterWidgetWrapper = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 10rem 0;
  margin: 0 auto;
`

const LogoWidget = styled.div`
  justify-self: center;
`
const LinksWidget = styled.div`
  /* al */
`
const CompanyWidget = styled.div``

const Links = styled.ul`
  li {
    padding: 1rem 0;
  }
`

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  padding-bottom: 2rem;
  text-transform: uppercase;
`

const AppDescription = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  padding: 0.6rem 0;
`

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`

const FooterWidgetBlock = () => {
  return (
    <FooterWidgetWrapper>
      <FooterSection>
        <LogoWidget>
          <Logo />
          <AppDescription>
            At Listify our purpose is to help people find great local businesses like dentists, hair
            stylists and mechanics. Go Explore!
          </AppDescription>
          <AppDescription>Proudly Made in Canada & USA</AppDescription>
          <AppDescription>1-877-426-5555</AppDescription>
        </LogoWidget>
        <LinksWidget>
          <Title>Resources</Title>
          <Links>
            <li>
              <StyledLink to='#'>Get the Theme</StyledLink>
            </li>
            <li>
              <StyledLink to='#'>Deals & Coupons</StyledLink>
            </li>
            <li>
              <StyledLink to='#'>How It Works</StyledLink>
            </li>
            <li>
              <StyledLink to='#'>Articles & Tips</StyledLink>
            </li>
            <li>
              <StyledLink to='#'>Terms of Service</StyledLink>
            </li>
          </Links>
        </LinksWidget>
        <CompanyWidget>
          <Title>Company</Title>

          <LinksWidget>
            <Links>
              <li>
                <StyledLink to='#'>Get the Theme</StyledLink>
              </li>
              <li>
                <StyledLink to='#'>Deals & Coupons</StyledLink>
              </li>
              <li>
                <StyledLink to='#'>How It Works</StyledLink>
              </li>
              <li>
                <StyledLink to='#'>Articles & Tips</StyledLink>
              </li>
              <li>
                <StyledLink to='#'>Terms of Service</StyledLink>
              </li>
            </Links>
          </LinksWidget>
        </CompanyWidget>
      </FooterSection>
    </FooterWidgetWrapper>
  )
}

export default FooterWidgetBlock
