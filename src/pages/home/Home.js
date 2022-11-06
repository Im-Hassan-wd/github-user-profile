import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'; 
// static files
import './Home.css'
import avatar from '../../img/logo.JPG';

export default function Home() {
  return (
    <div className='home'>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="stay connected with github" />
        <link rel="canonical" href="/" />
      </Helmet>
      <nav>
        <div className="logo">
          coding +2.0
          </div>
        <ul>
          <li><Link>Docs</Link></li>
          <li><Link>Blog</Link></li>
          <li><Link to='/search'>users</Link></li>
          <ul>
            <li>github</li>
          </ul>
        </ul>
      </nav>
      <section className='hero'>
        <h1>The place for anyone from anywhere to build anything.</h1>
        <p className='main-p'>Whether you're scaling your startup or just learning how to code, <span>Coding+2.0</span> is your home. Join the world's largest developer platform to build the innovations that empower humanity. Let's build from here.</p>
        <div className="link">
          <button>Get started</button>
          <input className='home-input' type="text" placeholder='quick search' />
        </div>
        <div className="coding">
          <div className="desc">
            <img src={avatar} alt="avatar-warwick" />
            <div className='desc-text'>
              <p>code reuse is the reuse of existing code from either external sources or from one's own past projects to develop new code.</p>
              <h5 className='me'>Hassan Warwick</h5>
              <h5>Freelance web developer</h5>
            </div>
          </div>
          <div className="code">
            <div className='nav'>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ol>
             <li>&#60;<span className='tag'>ul</span> <span className='cl'>class</span><span className='cl-val'>="recipes"</span>&#62;</li>

             <li>&#60;<span className='tag'>li</span> <span className='cl'>class</span><span className='cl-val'>="recipe"</span>&#62;</li>
             <li>&#60;<span className='tag'>img</span> src="/coffee.png" alt="coffee recipe icon"&#62;</li>
             <li>&#60;<span className='tag'>h4</span>&#62;Banana Boost&#60;/<span className='tag'>h4</span>&#62;</li>
             <li>&#60;<span className='tag'>p</span>&#62;Banana, Vanilla ice cream, Milk&#60;<span className='tag'>/p</span>&#62;</li>
             <li>&#60;<span className='tag'>/li</span>&#62;</li>

             <li>&#60;<span className='tag'>li</span> <span className='cl'>class</span><span className='cl-val'>="recipe"</span>&#62;</li>
             <li>&#60;<span className='tag'>img</span> src="/coffee.png" alt="coffee recipe icon"&#62;</li>
             <li>&#60;<span className='tag'>h4</span>&#62;Tropical Twist&#60;/<span className='tag'>h4</span>&#62;</li>
             <li>&#60;<span className='tag'>p</span>&#62;Peach, Pinapple, Apple juice&#60;<span className='tag'>/p</span>&#62;</li>
             <li>&#60;<span className='tag'>/li</span>&#62;</li>

             <li>&#60;<span className='tag'>li</span> <span className='cl'>class</span><span className='cl-val'>="recipe"</span>&#62;</li>
             <li>&#60;<span className='tag'>img</span> src="/coffee.png" alt="coffee recipe icon"&#62;</li>
             <li>&#60;<span className='tag'>h4</span>&#62;Protein Packer&#60;/<span className='tag'>h4</span>&#62;</li>
             <li>&#60;<span className='tag'>p</span>&#62;Oats, Peanut butter, Milk, Banana, Blueberries&#60;<span className='tag'>/p</span>&#62;</li>
             <li>&#60;<span className='tag'>/li</span>&#62;</li>

             <li>&#60;/<span className='tag'>ul</span>&#62;</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}