import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { HistoryContent } from './HistoryContent'

export const History = () => {
  return (
    <Container className='mt-4'>
      <h2 className='fs-5 fw-normal'>History</h2>
      <div>
        <HistoryContent></HistoryContent>
        <HistoryContent></HistoryContent>
        <HistoryContent></HistoryContent>
        <HistoryContent></HistoryContent>
      </div>
      <div className='text-center mt-3'>
        <Button variant='outline-primary'>More</Button>
      </div>
    </Container>
  )
}
