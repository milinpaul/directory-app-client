import React from 'react'
import styled from 'styled-components'

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

const index = ({ iconUrl, title, description }) => {
  return (
    <FeatureCard>
      <FeatureIcon src={iconUrl} />
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  )
}

export default index
