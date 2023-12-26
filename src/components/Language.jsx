import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const Language = ({ selected, setLang }) => {

  return (
    <Row xs={2} md={3} lg={6} className='ms-3 mb-2'>
      <Col onClick={() => setLang("en")} className={`py-2 text-center border-primary border-1 ${selected === "en" ? "border-bottom text-primary" : ""}`} style={{ transition: ".3s" }}>英語</Col>
      <Col onClick={() => setLang("ja")} className={`py-2 text-center border-primary border-1 ${selected === "ja" ? "border-bottom text-primary" : ""}`} style={{ transition: ".3s" }}>日本語</Col>
    </Row>
  )
}
