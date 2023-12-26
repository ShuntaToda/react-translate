import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Input } from './Input'
import { Langage } from './Langage'
import { Output } from './Output'
import { ChangeButton } from './ChangeButton'

export const Translate = () => {
  return (
    <Container className='mt-5'>
      <ChangeButton></ChangeButton>
      <Row>
        <Col>
          <Langage></Langage>
          <Input></Input>
        </Col>
        <Col>
          <Langage></Langage>
          <Output></Output>
        </Col>
      </Row>
    </Container>
  )
}
