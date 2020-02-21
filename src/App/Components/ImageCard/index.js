import React from 'react'

import styled from 'styled-components'

const ImageCardItem = styled.div`
  height: 28rem;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${(props) => props.media}) no-repeat center/cover;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.3)),
      url(${(props) => props.media}) no-repeat center/cover;
    transform: translateY(-0.5rem);
  }
`

const ImageText = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
`

const index = ({ media, children }) => {
  return (
    <ImageCardItem media={media}>
      <ImageText>{children}</ImageText>
    </ImageCardItem>
  )
}

export default index
