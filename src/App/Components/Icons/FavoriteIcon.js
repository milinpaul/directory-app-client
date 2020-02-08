import React from 'react'
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined'
// import Favorite from '@material-ui/icons/Favorite'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'

const StyledIconButton = styled(IconButton)`
  float: right;
  color: red;
`

const Count = styled.div`
  font-size: 0.97rem;
  font-weight: 100;
  padding: 0 0.3rem;
`

const FavoriteIcon = () => {
  return (
    <StyledIconButton>
      <FavoriteBorderOutlined size='small' />
      <Count>2</Count>
    </StyledIconButton>
  )
}

export default FavoriteIcon
