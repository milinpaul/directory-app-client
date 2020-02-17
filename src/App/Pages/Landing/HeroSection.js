import React from 'react'
import styled from 'styled-components'

const Herosection = styled.section`
  height: 70vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)),
    url('https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2019/05/Stocksy_txpbfa0785eO7M200_Medium_832542-1.jpg')
      no-repeat center/cover;
`

const HeroSection = () => {
  return <Herosection />
}

export default HeroSection
