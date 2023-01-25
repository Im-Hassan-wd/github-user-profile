import { useState } from 'react'

import './Pagination.css'

export default function Pagination({ start, setStart, end, setEnd, repositories, setIsPending}) { 
  
  return (
    <div className="pagination">
      <span className="range">({start} - {end})</span>
      
      {start === 0  ? 
        <button className="disable">prev</button> :
        <button onClick={() => {
          setStart(start -= 20)
          setIsPending(true)
          setEnd(end -= 20)
          setIsPending(false)
        }}>prev</button>
      }

      {end >= repositories.length ? 
        <button className="disable">next</button> :
        <button onClick={() => {
          setStart(start += 20)
          setIsPending(true)
          setEnd(end += 20)
          setIsPending(false)
        }}>next</button>
      }

      {end === repositories.length ? 
        <button className="disable">Show All</button> :
        <button onClick={() => {
          setStart(0)
          setIsPending(true)
          setEnd(repositories.length)
          setIsPending(false)
        }}>Show All</button>
      }

    </div>
  )
}

