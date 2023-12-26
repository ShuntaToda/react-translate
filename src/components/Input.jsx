import React, { useEffect, useRef, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export const Input = ({ textareaHeight, setTextareaHeight }) => {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    setText(e.target.value)
    const line = text.split('\n').length;
    setTextareaHeight(200 + line * 20)
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
