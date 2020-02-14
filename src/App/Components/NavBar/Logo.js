import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  padding: 1rem 1rem;
`

const Logo = () => {
  return (
    <Image src='https://listify-demos.astoundify.com/classic/wp-content/uploads/sites/2/2016/05/listify-footer-logo.svg' />
  )
}

export default Logo
