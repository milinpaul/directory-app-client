import React from 'react'
import HeroSection from './HeroSection'
import ListingSection from './ListingSection'
import CategoryTileBlock from './CategoryTileBlock'
import FeatureSection from './FeatureSection'

const LandingContainer = () => {
  return (
    <>
      <HeroSection />
      <CategoryTileBlock />
      <ListingSection />
      <FeatureSection />
    </>
  )
}

export default LandingContainer
