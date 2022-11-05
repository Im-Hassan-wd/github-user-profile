import { Link } from 'react-router-dom'

// styles and images
import './Navbar.css'
import githubBrand from '../icons/github-brands-2.svg'

// components
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to='/' className='logo'>
          <img src={githubBrand} alt="logo" />
          <span>githubpro</span>
        </Link>
        <div className="logo">
        </div>
        <Searchbar />
      </div>
    </nav>
  )
}
