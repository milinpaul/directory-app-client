import React from 'react'
import styled from 'styled-components'

import { SecondaryTitle } from '../../Components/Typography'
import { PrimaryButton } from '../../Components/Buttons'
import { TextBox } from '../../Components/Inputs'

const Herosection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url('https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2019/05/Stocksy_txpbfa0785eO7M200_Medium_832542-1.jpg')
      no-repeat center/cover;
`

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  transform: translateY(-2rem);
  h1 {
    padding-bottom: 1rem;
  }

  h3 {
    padding-bottom: 3rem;
  }

  @media only screen and (max-width: 375px) {
    h3 {
      display: none;
    }
  }
`

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: 5rem;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 0.6rem;

  @media only screen and (max-width: 375px) {
    font-size: 2.8rem;
    margin-bottom: 4rem;
  }
`

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;

  input {
    margin-right: 2rem;
  }

  @media only screen and (max-width: 375px) {
    input {
      margin-bottom: 4rem;
    }
    flex-direction: column;
  }
`

const HeroSection = () => {
  return (
    <Herosection>
      <HeroContentWrapper>
        <HeroTitle>Explore This City</HeroTitle>
        <SecondaryTitle color='#fff'>
          Listify helps you find out whats happening in your city, Let's explore.
        </SecondaryTitle>
        <SearchFormWrapper>
          <TextBox placeholder='What are you looking for?' />
          <TextBox placeholder='Location' />
          <PrimaryButton>Search</PrimaryButton>
        </SearchFormWrapper>
      </HeroContentWrapper>
    </Herosection>
  )
}

export default HeroSection
