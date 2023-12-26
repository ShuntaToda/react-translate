import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Input } from './Input'
import { Language } from './Language'
import { Output } from './Output'
import { ChangeButton } from './ChangeButton'

export const Translate = () => {
  const [fromLang, setFromLang] = useState("english")

  return (
    <Container className='mt-5'>
      <ChangeButton></ChangeButton>
      <Row>
        <Col>
          <Language></Language>
          <Input></Input>
        </Col>
        <Col>
          <Language></Language>
          <Output></Output>
        </Col>
      </Row>
    </Container>
  )
}
