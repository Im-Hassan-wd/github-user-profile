import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import Pagination from './Pagination'

// styles
import './Profile.css'

export default function Profile({ 
    page,
    setPage,
    users,
    setUsers,
    isPending,
    setIsPending,
    error,
    setError,
    url,
    setUrl,
    queryString,
    queryParams,
    query
  }) {

  const [hover, setHover] = useState(false)

  useEffect(() => {
    window.scrollTo({
      behaviour: "smooth",
      top: "0px",
    })
    const getUser = async () => {

      setIsPending(true)

      try {
        const res = await fetch(url)

        if(!res.ok) {
          throw new Error("Couldn't get users at the moment, try again")
        }

        const data = await res.json()
        
        setError(false)
        setIsPending(false)
        setUsers(data.items)
      }
      catch(err) {
        setIsPending(false)
        setError(err.message)
      }
    }
    getUser()
  }, [url])

  if(error) {
    return ( 
      <div className='error'>
        <Navbar />
        <h1>No user profile found. Make sure you have internet connection!</h1>
      </div> 
    )
  }

  return (
    <div className=''>
      <Navbar />
      <div className="msg">
        {isPending && <h2><span>.</span><span>.</span><span>.</span></h2>}
        {error && <h2>Coundn't get data for that resource</h2>}
      </div>
      <div className="profile">
        {users && users.map(profile => (
          <div
            className='preview' 
            key={profile.avatar_url}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <div className='frame'></div>
            <div className="text">
              <div className="img-div"><img src={profile.avatar_url} alt="" /></div>
                <p><span className='label'>username:</span> {profile.login}</p>
                <p><span className='label'>score:</span> {profile.score}</p>
                <p><span className='label'>profile type:</span> {profile.type}</p>
                <Link to={`/repository/${profile.login}/${profile.id}`}>View Repository</Link>
              </div>
            </div>
        ))}
      </div>
      {/* {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isPending ? 'loading...' : 'Load More'}</button>} */}
      <Pagination 
        setUrl={setUrl} 
        page={page} 
        setPage={setPage} 
        users={users} 
        query={query} 
        />
    </div>

  )
}
