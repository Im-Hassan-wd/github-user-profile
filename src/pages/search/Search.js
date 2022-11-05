import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

// styles
import './Search.css'

// components
import Profile from '../../components/Profile'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const [page, setPage] = useState(1)
  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(`https://api.github.com/search/users?q=${query}&page=${page}`)
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
        setUsers(data.items)
        
      }
      catch(err) {
        setIsPending(false)
        console.log(err.message)
        setError(err.message)
      }
    }
    getUser()
  }, [page, url, query])

  return (
    <>
    <Helmet>
      <title>Search</title>
      <meta name="description" content="find a user" />
      <link rel="canonical" href="/search" />
    </Helmet>
    <div layout className='search'>
      {users && <Profile 
        page={page}
        setPage={setPage}
        users={users}
        setUsers={setUsers}
        isPending={isPending}
        setIsPending={setIsPending}
        error={error}
        setError={setError}
        url={url}
        setUrl={setUrl}
        query={query}
        />}
    </div>
    </>
  )
}