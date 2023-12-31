import React from 'react'

export const Output = ({ textareaHeight, outputText }) => {
  return (
    <div className='border rounded py-3 px-2' style={{ height: `${textareaHeight}px` }}>{outputText}</div>
  )
}
