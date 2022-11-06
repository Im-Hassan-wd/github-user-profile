import { useState } from 'react'


import './Pagination.css'

export default function Pagination({ setUrl, page, setPage, query }) {

  const [value, setValue] = useState(0)

    return (
      <div className="pagination">
        {page === 1 ? <button className="disable" disabled={true} style={{
          pointerEvents: 'none'
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration 300 transform transition-all"><path d="M45.15 57.47L19.88 30.84 45.15 6.58"></path></svg></button> : <button onClick={() => {
            setPage(page - 1)
            setUrl(`https://api.github.com/search/users?q=${query}&page=${page}`)
          }}
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration 300 transform transition-all"><path d="M45.15 57.47L19.88 30.84 45.15 6.58"></path></svg>
        </button>}

        <h5>
          <span>Page-{page}</span>
          <input type="number"
          onChange={e => {
            setPage(e.target.value)
            setUrl(`https://api.github.com/search/users?q=${query}&page=${page}`)
          }}
          placeholder='0'
        />
        </h5>
  
        {page === 5 ? <button className="disable" disabled={true} style={{
          pointerEvents: 'none'
        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration-300 transform transition-all" ><path d="M18.86 57.47l25.26-26.63L18.86 6.58"></path></svg></button> :       <button
          onClick={() => {
              setPage(page + 1)
              setUrl(`https://api.github.com/search/users?q=${query}&page=${page}`)
          }}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#CACBD2" fill="none" className="duration-300 transform transition-all" ><path d="M18.86 57.47l25.26-26.63L18.86 6.58"></path></svg>
        </button>}

      </div>
    )
  }