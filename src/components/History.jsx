import React, { useEffect, useId, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { HistoryContent } from './HistoryContent'
import { getHistory } from '../api/histroy'

export const History = () => {
  const [historiesNum, setHistoriesNum] = useState(5)
  const [hisotries, setHistories] = useState([])
  useEffect(() => {
    const get = async () => {
      const data = await getHistory(historiesNum)
      console.log(data)
      setHistories(data.records.Items)
    }

    get()
  }, [historiesNum])
  return (
    <Container className='mt-4'>
      <h2 className='fs-5 fw-normal'>History</h2>
      <div>
        {hisotries.map((item, index) => (
          <HistoryContent item={item} key={index}></HistoryContent>
        ))}
      </div>
      <div className='text-center mt-3'>
        <Button variant='outline-primary'>More</Button>
      </div>
    </Container>
  )
}
