import React, { useEffect, useRef, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export const Input = ({ textareaHeight, setTextareaHeight, handleTranslate }) => {
  const [text, setText] = useState("")

  const timer = useRef(null)
  const saveTimer = useRef(null)

  const handleChange = (e) => {
    // テキストを表示
    setText(e.target.value)
    // 改行の数に応じてtextareaの高さを変更
    const line = text.split('\n').length;
    setTextareaHeight(200 + line * 20)

    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      handleTranslate(e.target.value)
    }, 1000)
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => {
      handleTranslate(e.target.value, true)
    }, 3000)
  }
  return (
    <FloatingLabel controlId="floatingTextarea2" label="">
      <Form.Control
        as="textarea"
        style={{ height: `${textareaHeight}px`, resize: "none" }}
        value={text}
        onChange={handleChange}
      />
    </FloatingLabel>
  )
}
