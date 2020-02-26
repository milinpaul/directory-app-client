import React from 'react'
import styled from 'styled-components'

import Section from '../../Components/Section'
import PricingCard from '../../Components/PricingCard'
import Wrapper from '../../Components/Wrapper'

const PricingTableContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
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
            planName='Premium'
            price='$12.99'
            features={[
              { name: 'One Time Fee for One Listing' },
              { name: 'One Listing' },
              { name: 'Unlimited Availability' },
              { name: 'Featured In the Results' },
              { name: 'Post Deals & Promotions' },
              { name: '24/7 Service & Support' }
            ]}
          />
        </PricingTableContainer>
      </Wrapper>
    </Section>
  )
}

export default PricingTableSection
