import React from 'react'
import { Button } from 'react-bootstrap'
import { LiaExchangeAltSolid } from "react-icons/lia";

export const ChangeButton = ({ setFromLang, setToLang, fromLang, toLang }) => {

  const exchangeLang = () => {
    const prevFromLang = fromLang
    setFromLang(toLang)
    setToLang(prevFromLang)
  }

  return (
    <Button onClick={exchangeLang} variant="outline-primary" size='sm' className='position-absolute start-50 translate-middle mt-4'><LiaExchangeAltSolid /></Button>
  )
}
