import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'

const ContentWrapper = styled.div`
  overflow: hidden;
`
const index = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}

export default index
