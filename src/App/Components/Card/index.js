import React from 'react'
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

const index = () => {
  return (
    <Card>
      <CardMedia cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg'>
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

export default index
