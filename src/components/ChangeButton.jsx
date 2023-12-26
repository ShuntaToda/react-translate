import React from 'react'
import { Button } from 'react-bootstrap'

export const ChangeButton = ({ setFromLang, setToLang, fromLang, toLang }) => {

  const exchangeLang = () => {
    const prevFromLang = fromLang
    setFromLang(toLang)
    setToLang(prevFromLang)
  }

  return (
    <Button onClick={exchangeLang} variant="outline-primary" size='sm' className='position-absolute start-50 translate-middle mt-4'>←→</Button>
  )
}
