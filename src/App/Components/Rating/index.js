import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ion-icon {
    font-size: 2rem;
    padding-right: 1rem;
    color: #ffb400;
  }
`

const index = () => {
  return (
    <Wrapper>
      <ion-icon name='star'></ion-icon>
      <ion-icon name='star'></ion-icon>
      <ion-icon name='star'></ion-icon>
      <ion-icon name='star-half'></ion-icon>
      <ion-icon name='star-outline'></ion-icon>
    </Wrapper>
  )
}

export default index
