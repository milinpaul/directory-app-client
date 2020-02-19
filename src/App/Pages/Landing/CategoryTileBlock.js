import React from 'react'
import styled from 'styled-components'

import StyledSection from '../../Components/Section'

const WrapperContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: space-around;
`

const CategoryTileBlock = () => {
  return (
    <StyledSection backgroundColor='#E7E5DF'>
      <WrapperContainer>
        <div>Item 1</div>
        <div>Item 2</div>
      </WrapperContainer>
    </StyledSection>
  )
}

export default CategoryTileBlock
