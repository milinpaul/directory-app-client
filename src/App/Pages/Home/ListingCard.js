import React from 'react'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red, green } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import Rating from '@material-ui/lab/Rating'
import PlaceIcon from '@material-ui/icons/Place'
import CallIcon from '@material-ui/icons/Call'
import { Button, Chip, Grid } from '@material-ui/core'

import FavoriteIcon from '../../Components/Icons/FavoriteIcon'

const StyledCard = styled(Card)`
  max-width: 345;
  border-radius: 7px;
  h2 {
    padding: 2rem 0;
  }
`

const RatingText = styled(Typography)`
  margin-bottom: -0.2rem;
  font-size: 0.9rem;
`

const StyledRating = styled.div`
  display: inline-flex;
  align-items: center;
`

const TextMarginLeft = styled(Typography)`
  margin-left: 0.8rem;
  letter-spacing: 0.025rem;
  color: ${(props) => props.color};
`

const CardDetailWrapper = styled.div`
  display: flex;
  padding: 0.4rem 0;
  /* align-items: center; */
`

const ListingCard = () => {
  return (
    <Grid item xs={6} sm={3}>
      <StyledCard style={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='180'
          image='https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Chip color='secondary' size='small' label='Featured' />
          <FavoriteIcon />
          <Typography gutterTop gutterBottom variant='h6' component='h2'>
            John's Pub
          </Typography>
          <RatingText color='textSecondary'>
            <Rating name='read-only' value={3} readOnly size='small' /> 4/5
          </RatingText>
          <Typography variant='body2' color='textSecondary' component='p'>
            Great Place to hangout...
          </Typography>
          <PlaceIcon style={{ color: green[500], fontSize: '1.2rem' }} />
          <Typography variant='body2' color='textSecondary' component='p'>
            473 Adelaide Street West Toronto Ontario M5V 1T1
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            Learn More
          </Button>
        </CardActions>
      </StyledCard>
    </Grid>
  )
}

export default ListingCard
