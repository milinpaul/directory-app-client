import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'

const FeatureCard = styled.div`
  width: 35rem;
  height: 35rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
`

const FeatureIcon = styled.img`
  height: 40%;
`
const FeatureTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.primaryTextColor};
  padding: 3rem 0;
`

const FeatureDescription = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  color: ${(props) => props.theme.primaryTextColor};
`

const FeatureSection = () => {
  return (
    <StyledSection backgroundColor='#f8f7f5'>
      <FeatureCard>
        <FeatureIcon src='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/search-online.svg' />{' '}
        <FeatureTitle>Find Businesses</FeatureTitle>
        <FeatureDescription>
          Discover & connect with great local businesses in your local neighborhood like dentists,
          hair stylists and more.
        </FeatureDescription>
      </FeatureCard>
    </StyledSection>
  )
}

export default FeatureSection
