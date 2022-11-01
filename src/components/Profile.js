import { useState } from 'react'

// styles
import './Profile.css'

export default function Profile({ data, totalPages, page, setPage, isPending }) {
  const [hover, setHover] = useState(false)

  if(data.length === 0) {
    return <div className='error'>No user profile...</div> 
  }

  return (
    <div className='container'>
      <div className="profile">
        {data.map(profile => (
          <div
            className='preview' 
            key={profile.id}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
          >
            <div className='frame'></div>
            <div className="text">
              <div className="img-div"><img src={profile.avatar_url} alt="" /></div>
                <p><span className='label'>username:</span> {profile.login}</p>
                <p><span className='label'>score:</span> {profile.score}</p>
                <p><span className='label'>profile type:</span> {profile.type}</p>
                <a className='link' href={profile.html_url}>View repo</a>
              </div>
            </div>
        ))}
      </div>
      {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isPending ? 'loading...' : 'Load More'}</button>}
    </div>

  )
}
