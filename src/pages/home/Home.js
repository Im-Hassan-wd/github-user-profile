import { useState, useEffect} from 'react'

// components
import Profile from '../../components/Profile'

// styles
import './Home.css'


export default function Home() {
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

  
  return (
    <div className='container'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {users && <Profile data={users} totalPages={totalPages} page={page} setPage={setPage} isPending={isPending} />}
    </div>
  );
}