import { Link } from 'react-router-dom';
// static files
import './Section.css'
import sofwareEngin from '../img/software.png';

export default function Section() {
  return (
    <section className='collab'>
      <div></div>
      <div className='content'>
        <h1>A better way to collaborate</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates id molestiae maxime quo est vitae. Commodi itaque exercitationem dignissimos ipsum.</p>
        <button>collaborate</button>
      </div>
      <img src={sofwareEngin} alt="software engineer" /> 
    </section>
  );
}