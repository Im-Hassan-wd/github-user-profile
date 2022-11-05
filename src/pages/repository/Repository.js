import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// static files  
import './Repository.css'
import repo from '../../icons/repository.png'
import star from '../../icons/star.png'
import fork from '../../icons/fork.png'

export default function Repository () {
    const { id, name } = useParams()

    const [repositories, setRepositories] = useState([])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        fetchRepo()
    }, [])
    const fetchRepo = async () => {
       const url =  'https://api.github.com/users/'+ name +'/repos';
       try {
        const res = await fetch(url);
        if(!res) {
            console.log(res)
            throw new Error()
        }
        const data = await res.json();
        setRepositories(data);
        setIsPending(false)
    }
    catch(err) {
        console.log(err.message)
        setIsPending(false)
       }
    }

    return (
        <>
        <Helmet>
            <title>Repository</title>
            <meta name="description" content="browse through lists of user's repository" />
            <link rel="canonical" href={"/repository/" + name + id}/>
        </Helmet>
        <div className="repository">
            <div className='banner'></div>
            <img className='owner-img' src={'https://avatars.githubusercontent.com/u/'+ id +'?v=4'} />
            <div className='owner'>
                <h2>{ name }</h2>
            </div>
            <div className='repo'>
                <h4>Repositories({repositories.length})</h4>
                {isPending && <h3>...</h3>}
                {error && <h3>{error}</h3>}
                <ul className='repo-main-list'>
                {repositories && repositories.map(repository => (
                    <li className='repo-main-list-li' key={repository.archive_url}>
                        <div>
                            <img className='repo-icon' src={repo} alt='repo-icon'/>
                            <a href={repository.html_url}>{ repository.name }</a>
                            <span>Public</span>
                        </div>
                        <ul className='repo-sub-list'>
                            <li>{ repository.language }</li>
                            <li>
                                <img className='repo-icon' src={star} alt='star-icon' />
                                <span>{ repository.stargazers_count }</span>
                            </li>
                            <li>
                                <img className='repo-icon' src={fork} alt='fork-icon' />
                                <span>{ repository.forks }</span>
                            </li>
                        </ul>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        </>
    );
}
