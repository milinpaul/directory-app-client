import React from 'react'
import HeroSection from './HeroSection'
import ListingSection from './ListingSection'
import CategoryTileBlock from './CategoryTileBlock'
import FeatureSection from './FeatureSection'
import FullWidthBlock from './FullWidthBlock'
import PricingTableSection from './PricingTableSection'

const LandingContainer = () => {
  return (
    <>
      <HeroSection />
      <CategoryTileBlock />
      <ListingSection />
      <FeatureSection />
      <FullWidthBlock />
      <PricingTableSection />
    </>
  )
}

export default LandingContainer
