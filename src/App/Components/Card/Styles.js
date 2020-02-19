import styled from 'styled-components'

const Card = styled.div`
  width: 40rem;
  height: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  background-color: #fff;
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
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(128, 128, 128, 0.5);
  }
`

const RatingWrapper = styled.div`
  padding: 2rem 3rem;
`

export {
  Card,
  CardMedia,
  CardInfoWrapper,
  CardTitle,
  CardAddress,
  CardPhone,
  FavoriteIconWrapper,
  IconOverlay,
  RatingWrapper
}
