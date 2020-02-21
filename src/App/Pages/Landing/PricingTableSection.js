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
  font-weight: 300;
  border-bottom: 1px solid #e9edf2;
  padding: 2rem 0;
  width: 80%;
  text-align: center;
  letter-spacing: 1.5px;
`

const PricingTableSection = () => {
  return (
    <Section backgroundColor='#fffff'>
      <PricingCard>
        <PricingInfo>
          <PricingTitle>Basic</PricingTitle>
          <Price>$6.99</Price>
        </PricingInfo>
      </PricingCard>
    </Section>
  )
}

export default PricingTableSection
