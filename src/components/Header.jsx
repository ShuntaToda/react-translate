import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar className="">
      <Container>
        <Navbar.Brand href="/">React Translate</Navbar.Brand>
      </Container>
    </Navbar>
  )
}
