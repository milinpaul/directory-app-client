import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'

const ContentWrapper = styled.div`
  overflow: hidden;
  padding: 2rem 2rem;
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
