import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'
import Card from '../../Components/Card'

const Wrapper = styled.div`
  max-width: 80%;
  margin: auto;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 6rem;
  justify-items: center;
  grid-auto-flow: row;

  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ListingSection = () => {
  return (
    <StyledSection backgroundColor='#fff'>
      <Wrapper>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Wrapper>
    </StyledSection>
  )
}

export default ListingSection
