import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'
import FeatureCard from '../../Components/FeatureCard'

const FeatureCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 0 2rem;
`

const FeatureSection = () => {
  return (
    <StyledSection backgroundColor='#f8f7f5'>
      <FeatureCardWrapper>
        <FeatureCard
          iconUrl='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/search-online.svg'
          title='Find Businesses'
          description='Discover & connect with great local businesses in your local neighborhood like dentists,
        hair stylists and more.'
        />
        <FeatureCard
          iconUrl='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/find-listing.svg'
          title='Review Listings'
          description='Get valuable insights about listings and tell other readers about your experiences by leaving reviews for businesses.'
        />
        <FeatureCard
          iconUrl='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/make-online-booking.svg'
          title='Make a Reservation'
          description='Easily setup an appointment directly from the business listing page using our integrated booking options.'
        />
      </FeatureCardWrapper>
    </StyledSection>
  )
}

export default FeatureSection
