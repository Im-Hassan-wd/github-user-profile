// static files
import './Cta.css'
import team from '../img/team.png'

export default function Cta() {
  return (
    <div className='cta'>
        <div className='content'>
            <h1>Productive with Github Pro</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates id molestiae maxime quo est vitae. Commodi itaque exercitationem dignissimos ipsum.</p>
        </div>
        <div><img src={team} alt='team' /></div>
    </div>
  );
}