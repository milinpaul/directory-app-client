import React from 'react'
import styled from 'styled-components'

import { PrimaryTitle, SecondaryTitle } from '../../Components/Typography'
import { StyledButton } from '../../Components/Buttons'

const CTAContainer = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-column: 1/3;
  padding: 10rem;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 375px) {
    display: none;
  }
  @media only screen and (max-width: 812px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5rem;

    h2,
    h3 {
      margin-bottom: 3rem;
      text-align: center;
    }
  }
`

const CTABtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;

  span {
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1rem;
    text-align: center;
  }
`
const CTATextWrapper = styled.div`
  justify-content: center;
  margin: auto 0;
`

const CallToActionBlock = () => {
  return (
    <CTAContainer>
      {/* <Wrapper> */}
      <CTATextWrapper>
        <PrimaryTitle>
          Listify is the best way to find & discover great local businesses
        </PrimaryTitle>
        <SecondaryTitle>
          This won’t be the first time you look for a listing directory theme, but with Listify it
          may be the last time.
        </SecondaryTitle>
      </CTATextWrapper>
      <CTABtnWrapper>
        <StyledButton>Create Your Account</StyledButton>
        <span>and get started in minutes.</span>
      </CTABtnWrapper>
      {/* </Wrapper> */}
    </CTAContainer>
  )
}

export default CallToActionBlock
