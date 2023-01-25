import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// static files  
import './Repository.css'
import repo from '../../icons/repository.png'
import star from '../../icons/star.png'
import fork from '../../icons/fork.png'
import Pagination from '../../components/Pagination';

export default function Repository () {
    const { id, name } = useParams()
    const navigate = useNavigate();

    const [repositories, setRepositories] = useState([])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(20)

    useEffect(() => {
        window.scrollTo({
            behaviour: "smooth",
            top: "0px"
        })
        fetchRepo()
    }, [start])
    const fetchRepo = async () => {
       const url =  'https://api.github.com/users/'+ name +'/repos?per_page=300';
       try {
        const res = await fetch(url);
        if(!res) {
            throw new Error()
        }
        const data = await res.json();
        setRepositories(data);
        setIsPending(false)
        setError(null)
    }
    catch(err) {
        setError("Something went wrong, but don't fret ___ let's give it anothershot")
        setIsPending(true)
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
            <div className='banner'>
              <button onClick={() => navigate(-1)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" strokeWidth="2.5" stroke="#000000" fill="none" className="duration 300 transform transition-all"><path d="M45.15 57.47L19.88 30.84 45.15 6.58"></path></svg>
              Go back
              </button>
            </div>
            <img className='owner-img' alt='avatar' src={'https://avatars.githubusercontent.com/u/'+ id +'?v=4'} />
            <div className='owner'>
                <h3>{ name }</h3>
            </div>
            <div className='repo'>
                <h4>
                    <img className='repo-icon' src={repo} alt='repo-icon'/>
                    {isPending === false ? <span>Repositories({repositories.length})</span>:
                    <span>Repositories(...)</span>}
                </h4>
                {isPending && <h3>
                        <span className="load-span">.</span>
                        <span className="load-span">.</span>
                        <span className="load-span">.</span>
                    </h3>}
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
                            {repository.language ?
                                <li>{ repository.language }</li>:
                                <li><span className='load-span'>.</span><span className='load-span'>.</span><span className='load-span'>.</span></li>
                            }
                            <li>
                                <img className='repo-icon' src={star} alt='star-icon' />
                                <span className='count'>{ repository.stargazers_count }</span>
                            </li>
                            <li>
                                <img className='repo-icon' src={fork} alt='fork-icon' />
                                <span className='count'>{ repository.forks }</span>
                            </li>
                        </ul>
                    </li>
                )).slice(start, end)}
                </ul>
            </div>
            <Pagination 
                setStart={setStart} 
                start={start} 
                setEnd={setEnd} 
                end={end} 
                repositories={repositories}
                setIsPending={setIsPending}
            />
        </div>
        </>
    );
}
