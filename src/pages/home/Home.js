import { Helmet } from 'react-helmet-async'
// styles
import './Home.css'
//components
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Cta from '../../components/Cta';

export default function Home() {
  return (
    <div className=''>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="stay connected with github" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Section />
      <Cta />
    </div>
  );
}