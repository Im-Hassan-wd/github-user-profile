import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  
  const handleSearch = e => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
    window.location.reload()
  }
 
  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <input 
        type="text" 
        id='search' 
        onChange={e => setTerm(e.target.value)}
        required
        placeholder='search user profile'
        className='home-input'
    />
    </form>
  )
}