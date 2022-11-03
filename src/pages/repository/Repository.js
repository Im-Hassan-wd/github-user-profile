import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// static files  
import './Repository.css'
import repo from '../../icons/repository.png'
import image from '../../img/logo.JPG'

export default function Repository () {
    const {id} = useParams()
    useEffect(() => {
        // fetchRepo()
    }, [])
    const fetchRepo = async () => {
       const url =  'https://api.github.com/users/'+ id +'/repos';
       try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
       }
       catch(err) {
        console.log(err.message)
       }
    }

    return ( 
        <div className="repository">
          <div className='banner'></div>
          <img className='owner-img' src={image} />
          <div className='owner'>
            <h2>Hassan Warwick</h2>
          </div>
          <div className='repo'>
            <h4>Repositories</h4>
            <ul className='repo-main-list'>
                <li className='repo-main-list-li'>
                    <div>
                        <img className='repo-icon' src={repo} />
                        <p>ecommerce website</p>
                    </div>
                    <ul className='repo-sub-list'>
                        <li>javaScript</li>
                        <li>3</li>
                        <li>3</li>
                    </ul>
                </li>
            </ul>
          </div>
        </div>
    );
}
