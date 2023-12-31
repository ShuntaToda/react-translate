import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { HistoryContent } from './HistoryContent'
import { getHistory } from '../api/histroy'
import { TbReload } from "react-icons/tb";

export const History = () => {
  const [historiesNum, setHistoriesNum] = useState(5)
  const [hisotries, setHistories] = useState([])

  const get = async () => {
    const data = await getHistory(historiesNum)
    console.log(data)
    setHistories(data.records.Items)
  }

  useEffect(() => { get() }, [historiesNum])


  const handleMore = () => {
    setHistoriesNum(n => n + 5)
  }
  return (
    <Container className='mt-4'>
      <div className='d-flex'>
        <h2 className='fs-5 fw-normal'>History</h2>
        <div onClick={get} className='ms-3 btn btn-sm btn-outline-primary'><TbReload /></div>
      </div>
      <div>
        {hisotries.map((item, index) => (
          <HistoryContent item={item} key={index}></HistoryContent>
        ))}
      </div>
      <div className='text-center mt-3'>
        <Button variant='outline-primary' onClick={handleMore}>More</Button>
      </div>
    </Container>
  )
}
