import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Language = () => {
  return (
    <Row xs={2} md={3} lg={6} className='ms-3 mb-2'>
      <Col className='py-2 text-center border-bottom border-primary border-1 text-primary'>英語</Col>
      <Col className='py-2 text-center'>日本語</Col>
    </Row>
  )
}
