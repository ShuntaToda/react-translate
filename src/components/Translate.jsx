import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Input } from './Input'
import { Language } from './Language'
import { Output } from './Output'
import { ChangeButton } from './ChangeButton'
import { postHistory } from '../api/histroy'

export const Translate = () => {
  // 言語の設定はaws translateを参照
  const [fromLang, setFromLang] = useState("ja")
  const [toLang, setToLang] = useState("en")
  const [textareaHeight, setTextareaHeight] = useState(200)

  const [outputText, setoutputText] = useState("")

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

  const handleTranslate = async (inputText, save = false) => {
    console.log(inputText)
    const data = await postHistory(inputText, fromLang, toLang, save)
    console.log(data)
    setoutputText(data.output_text)
  }

  return (
    <Container className='mt-5'>
      <ChangeButton setFromLang={setFromLang} setToLang={setToLang} fromLang={fromLang} toLang={toLang}></ChangeButton>
      <Row>
        <Col>
          <Language selected={fromLang} setLang={changeFromLang}></Language>
          <Input textareaHeight={textareaHeight} handleTranslate={handleTranslate} setTextareaHeight={setTextareaHeight}></Input>
        </Col>
        <Col>
          <Language selected={toLang} setLang={changeToLang}></Language>
          <Output textareaHeight={textareaHeight} outputText={outputText}></Output>
        </Col>
      </Row>
    </Container>
  )
}
