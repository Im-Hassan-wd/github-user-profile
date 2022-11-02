import { useState, useEffect } from 'react'

import Navbar from './Navbar'

// styles
import './Profile.css'

export default function Profile() {
  const [hover, setHover] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const url = `https://api.github.com/search/users?q=lagos&page=${page}`

  useEffect(() => {
    const getUser = async () => {

      setIsPending(true)

      try {
        const res = await fetch(url)

        if(!res.ok) {
          throw new Error(res.statusText)
        }

        const data = await res.json()

        setError(false)
        setIsPending(false)
        setUsers([...users, ...data.items])
        // setUsers(data.items)
        setTotalPages(Math.round(data.total_count / 30))
        
      }
      catch(err) {
        setIsPending(false)
        console.log(err.message)
        setError(err.message)
      }
    }
    getUser()
  }, [page, url])

  if(users.length === 0) {
    return <div className='error'>No user profile...</div> 
  }

  return (
    <div className=''>
      <Navbar />
      <div className="profile">
        {users.map(profile => (
          <div
            className='preview' 
            key={profile.id}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <div className='frame'></div>
            <div className="text">
              <div className="img-div"><img src={profile.avatar_url} alt="" /></div>
                <p><span className='label'>username:</span> {profile.login}</p>
                <p><span className='label'>score:</span> {profile.score}</p>
                <p><span className='label'>profile type:</span> {profile.type}</p>
                <a className='link' href={profile.html_url}>View repo</a>
              </div>
            </div>
        ))}
      </div>
      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isPending ? 'loading...' : 'Load More'}</button>}
    </div>

  )
}
