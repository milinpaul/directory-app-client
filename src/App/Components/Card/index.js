import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 30rem;
  height: 30rem;
  /* border: 1px solid crimson; */
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
`

const CardMedia = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.cardImage}) no-repeat center/cover;
  width: 100%;
  height: 22rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  color: #ffffff;
`

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30% 2rem 0 2rem;
  /* padding: 0 2rem; */
`

const CardTitle = styled.h4`
  font-size: 1.7rem;
  font-weight: 500;
  padding-bottom: 1rem;
`

const CardAddress = styled.h5`
  /* padding: 0.5rem 0;
  padding-right: 0.5rem; */
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

const index = () => {
  return (
    <Card>
      <CardMedia cardImage='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/thegoodson-11.jpg'>
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
