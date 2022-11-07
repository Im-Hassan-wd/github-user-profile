import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'

// styles
import './Profile.css'
import User from './User'

export default function Profile({ 
    users,
    setUsers,
    isPending,
    setIsPending,
    error,
    setError,
    url
  }) {

  useEffect(() => {
    window.scrollTo({
      behaviour: "smooth",
      top: "0px"
    })
    getUser()
  }, [url])

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

  if(error) {
    return ( 
      <div className='error'>
        <Navbar  />
        <h1>Something went wrong, but don't fret ___ let's give it another <Link to='/home'>shot</Link></h1>
      </div> 
    )
  }

  return (
    <div className=''>
      <Navbar />
      <div className="msg">
        {isPending && <h3>
          <span className='load-span'>.</span>
          <span className='load-span'>.</span>
          <span className='load-span'>.</span>
        </h3>}
        {error && <h2>Coundn't get data for that resource</h2>}
      </div>
      <div>
        <User users={users} />
      </div>
    </div>

  )
}
