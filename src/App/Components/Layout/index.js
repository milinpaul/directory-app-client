import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const ContentWrapper = styled.div`
  overflow: hidden;
  padding: 0 2rem;
`
const index = ({ children }) => {
  return (
    <>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  )
}

export default index
