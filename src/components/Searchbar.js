import { useState } from 'react'
// import { useHistory } from 'react-router-dom'

// styles
import './Searchbar.css'


export default function Searchbar() {
  const [term, setTerm] = useState('')
  // const history = useHistory()

  const handleSearch = e => {
    e.preventDefault()
  //  history.push(`/search?q=${term}`)
  }
 
  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <input 
        type="text" 
        id='search' 
        onChange={e => setTerm(e.target.value)}
        required
        placeholder='search user profile'
    />
    <button>/</button>
    </form>
  )
}