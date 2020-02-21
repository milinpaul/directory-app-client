import React from 'react'
import styled from 'styled-components'
import { StyledButton } from '../../Components/Buttons'

const FullWidthSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/Get-The-Exposure-You-Deserve.jpg')
      no-repeat center/cover;
  height: 60rem;

  @media only screen and (max-width: 812px) {
    height: 40rem;
  }
`

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rem;

  @media only screen and (max-width: 375px) {
    padding: 10rem;
  }

  @media only screen and (max-width: 812px) {
    padding: 8rem;
  }
`

const ContentTitle = styled.h3`
  font-size: 3rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1rem;
  text-align: center;
  padding-bottom: 1rem;
  @media only screen and (max-width: 375px) {
    font-weight: 400;
    padding-bottom: 3rem;
  }
`

const ContentDescription = styled.h4`
  font-size: 1.7rem;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 5rem;
  @media only screen and (max-width: 375px) {
    display: none;
  }
  @media only screen and (max-width: 812px) {
    padding-bottom: 4rem;
  }
`

const FullWidthBlock = () => {
  return (
    <FullWidthSection>
      <ContentWrapper>
        <ContentTitle>Get Business Exposure</ContentTitle>
        <ContentDescription>
          Your business deserves efficiently unleash cross-media information without cross-media
          value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain
          clicks-and-mortar solutions without functional solutions.
        </ContentDescription>
        <StyledButton>How It Works</StyledButton>
      </ContentWrapper>
    </FullWidthSection>
  )
}

export default FullWidthBlock
