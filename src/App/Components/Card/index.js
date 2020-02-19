import React from 'react'
import PropTypes from 'prop-types'

import FavoriteIcon from '../Icons/FavoriteIcon'
import Rating from '../Rating'

import {
  Card,
  CardMedia,
  FavoriteIconWrapper,
  IconOverlay,
  CardInfoWrapper,
  CardTitle,
  CardAddress,
  CardPhone,
  RatingWrapper
} from './Styles'

const index = ({ cardImage }) => {
  return (
    <Card>
      <CardMedia cardImage={cardImage}>
        <FavoriteIconWrapper>
          <IconOverlay>
            <FavoriteIcon />
          </IconOverlay>
        </FavoriteIconWrapper>
        <CardInfoWrapper>
          <CardTitle>Card Title</CardTitle>
          <CardAddress>1096 Queen Street West Toronto Ontario M6J 1H9</CardAddress>
          <CardPhone>
            <ion-icon name='call'></ion-icon>
            (416) 551-0589
          </CardPhone>
        </CardInfoWrapper>
      </CardMedia>
      <RatingWrapper>
        <Rating />
      </RatingWrapper>
    </Card>
  )
}

index.defaultProps = {
  cardImage: ''
}

index.propTypes = {
  cardImage: PropTypes.string
}

export default index
