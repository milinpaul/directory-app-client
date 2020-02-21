import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'
import ImageCard from '../../Components/ImageCard'
import { PrimaryTitle, SecondaryTitleUnderline } from '../../Components/Typography'

const WrapperContainer = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-items: center;

  h2 {
    padding-bottom: 2rem;
  }
`

const ImageCardContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  justify-content: space-between;
  padding: 6rem 0;

  @media only screen and (max-width: 375px) {
    grid-template-columns: 1fr;
    align-content: center;
  }
`

const CategoryTileBlock = () => {
  return (
    <StyledSection backgroundColor='#f8f7f5'>
      <WrapperContainer>
        <PrimaryTitle>What Do You Want to Do Tonight?</PrimaryTitle>
        <SecondaryTitleUnderline>
          Discover & connect with great local businesses in Toronto.
        </SecondaryTitleUnderline>
        <ImageCardContainer>
          <ImageCard media='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/Stocksy_txp42f6ecbd1zy000_Medium_514651-1024x701.jpg'>
            Nightlife
          </ImageCard>
          <ImageCard media='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/Stocksy_txp14e9c583tyy000_Small_614033-1024x684.jpg'>
            Arts & Entertainment
          </ImageCard>
          <ImageCard media='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/Stocksy_txp7335db1f9zy000_Medium_183402-1024x682.jpg'>
            Outdoors
          </ImageCard>
          <ImageCard media='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/Stocksy_txp14e9c583tyy000_Small_471575-1024x714.jpg'>
            Lodging
          </ImageCard>
        </ImageCardContainer>
      </WrapperContainer>
    </StyledSection>
  )
}

export default CategoryTileBlock
