import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// static files  
import './Repository.css'
import repo from '../../icons/repository.png'
import star from '../../icons/star.png'
import fork from '../../icons/fork.png'
import image from '../../img/logo.JPG'

export default function Repository () {
    const {id} = useParams()
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetchRepo()
    }, [])
    const fetchRepo = async () => {
       const url =  'https://api.github.com/users/'+ id +'/repos';
       try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setRepositories(data)
       }
       catch(err) {
        console.log(err.message)
       }
    }

    return ( 
        <div className="repository">
          <div className='banner'></div>
          <img className='owner-img' src={'https://avatars.githubusercontent.com/u/8760121?v=4'} />
          <div className='owner'>
            <h2>{ id }</h2>
          </div>
          <div className='repo'>
            <h4>Repositories</h4>
            <ul className='repo-main-list'>
            {repositories && repositories.map(repository => (
                <li className='repo-main-list-li' key={repository.archive_url}>
                    <div>
                        <img className='repo-icon' src={repo} alt='repo-icon'/>
                        <p>{ repository.name }</p>
                    </div>
                    <ul className='repo-sub-list'>
                        <li>{ repository.language }</li>
                        <li>
                            <img className='repo-icon' src={star} alt='star-icon' />
                            <span>{ repository.stargazers_count }</span>
                        </li>
                        <li>
                            <img className='repo-icon' src={fork} alt='fork-icon' />
                            <span>{ repository.star }</span>
                        </li>
                    </ul>
                </li>
            ))}
            </ul>
          </div>
        </div>
    );
}
