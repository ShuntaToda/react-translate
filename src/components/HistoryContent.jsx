import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const HistoryContent = ({ item }) => {
  return (
    <Row className='py-3 border-bottom'>
      <Col>{item.input_text}</Col>
      <Col>{item.output_text}</Col>
    </Row>
  )
}
