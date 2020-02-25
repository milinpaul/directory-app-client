import React from 'react'
import styled from 'styled-components'

import Section from '../../Components/Section'
import PricingCard from '../../Components/PricingCard'
import Wrapper from '../../Components/Wrapper'

const PricingTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  grid-column-gap: 5rem;
  margin: 3rem 3rem;
`

const PricingTableSection = () => {
  return (
    <Section backgroundColor='#fffff'>
      <Wrapper>
        <PricingTableContainer>
          <PricingCard
            planName='Basic'
            price='$6.99'
            features={[
              { name: 'Basic Listing Submission' },
              { name: 'One Listing' },
              { name: '30 Days Availability' },
              { name: 'Limited Support' },
              { name: 'Accept Reviews' },
              { name: 'Edit Your Listing' }
            ]}
          />
          <PricingCard
            planName='Basic'
            price='$6.99'
            features={[
              { name: 'Basic Listing Submission' },
              { name: 'One Listing' },
              { name: '30 Days Availability' },
              { name: 'Limited Support' },
              { name: 'Accept Reviews' },
              { name: 'Edit Your Listing' }
            ]}
          />
          <PricingCard
            planName='Basic'
            price='$6.99'
            features={[
              { name: 'Basic Listing Submission' },
              { name: 'One Listing' },
              { name: '30 Days Availability' },
              { name: 'Limited Support' },
              { name: 'Accept Reviews' },
              { name: 'Edit Your Listing' }
            ]}
          />
        </PricingTableContainer>
      </Wrapper>
    </Section>
  )
}

export default PricingTableSection
