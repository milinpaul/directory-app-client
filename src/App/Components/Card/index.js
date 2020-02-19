import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '../Icons/FavoriteIcon'

const Card = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`

const CardMedia = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.cardImage}) no-repeat center/cover;
  width: 100%;
  height: 79%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: #ffffff;
`

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15% 2rem 0 2rem;
`

const CardTitle = styled.h4`
  font-size: 1.7rem;
  font-weight: 500;
  padding-bottom: 1rem;
`

const CardAddress = styled.h5`
  font-size: 1.4rem;
  font-weight: 300;
  padding-bottom: 0.5rem;
`

const CardPhone = styled.h5`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  ion-icon {
    font-size: 1.6rem;
    padding-right: 0.5rem;
  }
  padding: 0.5rem 0.5rem;
`

const FavoriteIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem;
  ion-icon {
    font-size: 2.5rem;
  }
`

const IconOverlay = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background-color: rgba(128, 128, 128, 0.3);
  display: inline-flex;
`

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
    </Card>
  )
}

export default index
