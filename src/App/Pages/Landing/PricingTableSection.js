import React from 'react'
import styled from 'styled-components'

import Section from '../../Components/Section'

const PricingCard = styled.div`
  height: 50rem;
  width: 40rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`

const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  border-bottom: 1px solid #e9edf2;
  padding: 2rem 0;
  width: 80%;
  text-align: center;
`

const Price = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  border-bottom: 1px solid #e9edf2;
  padding: 2rem 0;
  width: 80%;
  text-align: center;
  letter-spacing: 1.5px;
`

const FeatureItems = styled.div`
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e9edf2;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  ion-icon {
    font-size: 2rem;
    color: ${(props) => props.theme.primaryColor};
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    font-style: bold;
    margin-left: 0.5rem;
    letter-spacing: 0.5px;
  }
`

const CTAButton = styled.div`
  font-size: 1.3rem;
  color: #ffffff;
  border: none;
  background-color: ${(props) => props.theme.primaryButtonColor};
  padding: 1.2rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #b40e4a;
    transform: translateY(-0.5rem);
  }

  @media only screen and (max-width: 375px) {
    padding: 2rem 3rem;
    font-size: 1.3rem;
  }

  display: flex;
  align-items: center;

  ion-icon {
    font-size: 1.6rem;
    margin-left: 1rem;
  }
`

const PricingTableSection = () => {
  return (
    <Section backgroundColor='#fffff'>
      <PricingCard>
        <PricingInfo>
          <PricingTitle>Basic</PricingTitle>
          <Price>$6.99</Price>
          <FeatureItems>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>Basic Listing Submission</p>
            </Item>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>One Listing</p>
            </Item>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>30 Days Availability</p>
            </Item>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>Limited Support</p>
            </Item>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>Accept Reviews</p>
            </Item>
            <Item>
              <ion-icon name='checkmark-circle-outline'></ion-icon>
              <p>Edit Your Listing</p>
            </Item>
          </FeatureItems>
          <CTAButton>
            Get Started Now <ion-icon name='arrow-forward-outline'></ion-icon>
          </CTAButton>
        </PricingInfo>
      </PricingCard>
    </Section>
  )
}

export default PricingTableSection
