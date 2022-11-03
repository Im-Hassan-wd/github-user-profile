// styles
import './Home.css'
//components
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Cta from '../../components/Cta';

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Section />
      <Cta />
    </div>
  );
}