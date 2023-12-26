import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export const Input = () => {
  return (
    <FloatingLabel controlId="floatingTextarea2" label="">
      <Form.Control
        as="textarea"
        style={{ height: '200px' }}
      />
    </FloatingLabel>
  )
}
