import { Link } from 'react-router-dom';
// static files
import './Hero.css'
import logo from '../icons/github-brands-2.svg';
import openSource from '../img/open-source.svg';

export default function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
      <nav>
        <div className='logo'>
            <img src={logo} alt='logo' />
        </div>
        <ul>
            <li><Link to='*'>Home</Link></li>
            <li><Link to='*'>Find user</Link></li>
        </ul>
      </nav>
      <div className='content'>
        <h1>The online coding platform for every developer</h1>
        <Link to='*'>Find user</Link>
        <img src={openSource} alt='open-source' />
      </div>
      </div>
    </div>
  );
}