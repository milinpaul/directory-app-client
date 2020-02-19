import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'
import Card from '../../Components/Card'
import { PrimaryHeadingUnderline } from '../../Components/Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 6rem;
  grid-column-gap: 3rem;
  justify-items: center;
  grid-auto-flow: row;
  padding-top: 6rem;

  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 812px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ListingSection = () => {
  return (
    <StyledSection backgroundColor='#fff'>
      <Wrapper>
        <PrimaryHeadingUnderline>The Most Popular Things to Do in the City</PrimaryHeadingUnderline>
        <CardContainer>
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
          <Card cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg' />
        </CardContainer>
      </Wrapper>
    </StyledSection>
  )
}

export default ListingSection
