import { Link } from 'react-router-dom'

// styles and images
import './Navbar.css'

// components
import Searchbar from './Searchbar'


export default function Navbar() {
  
  return (
    <div className="home">
      <nav className='header-home-nav'>
        <Link to='/' className="logo">
          coding +2.0
        </Link>
        <ul>
          <li><Link>Docs</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link to='/search'>users</Link></li>
        </ul>
        <Searchbar />
      </nav>
    </div>
  )
}
