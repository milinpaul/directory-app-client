import React from 'react'
import styled from 'styled-components'

import NavBar from '../NavBar'
import Footer from '../Footer'

const ContentWrapper = styled.div`
  overflow: hidden;
`
const index = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </>
  )
}

export default index
