import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Input } from './Input'
import { Language } from './Language'
import { Output } from './Output'
import { ChangeButton } from './ChangeButton'

export const Translate = () => {
  const [fromLang, setFromLang] = useState("en")
  const [toLang, setToLang] = useState("ja")

  const changeFromLang = (lang) => {
    if (lang === toLang) {
      setToLang(fromLang)
      setFromLang(lang)
    }
  }
  const changeToLang = (lang) => {
    if (lang === fromLang) {
      setFromLang(toLang)
      setToLang(lang)
    }
  }

  return (
    <Container className='mt-5'>
      <ChangeButton setFromLang={setFromLang} setToLang={setToLang} fromLang={fromLang} toLang={toLang}></ChangeButton>
      <Row>
        <Col>
          <Language selected={fromLang} setLang={changeFromLang}></Language>
          <Input></Input>
        </Col>
        <Col>
          <Language selected={toLang} setLang={changeToLang}></Language>
          <Output></Output>
        </Col>
      </Row>
    </Container>
  )
}
