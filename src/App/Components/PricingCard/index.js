import React from 'react'

import {
  PricingCard,
  PricingInfo,
  PricingTitle,
  Price,
  FeatureItems,
  Item,
  CTAButton
} from './Styles'

const index = ({ planName, price, features, CTABtnName }) => {
  const renderFeatures =
    features &&
    features.map((feature) => (
      <Item>
        <ion-icon name='checkmark-circle-outline'></ion-icon>
        <p>{feature.name}</p>
      </Item>
    ))
  return (
    <PricingCard>
      <PricingInfo>
        <PricingTitle>{planName}</PricingTitle>
        <Price>{price}</Price>
        <FeatureItems>{renderFeatures}</FeatureItems>
        <CTAButton>
          {CTABtnName}
          <ion-icon name='arrow-forward-outline'></ion-icon>
        </CTAButton>
      </PricingInfo>
    </PricingCard>
  )
}

index.defaultProps = {
  CTABtnName: 'Get Started Now'
}

export default index
