import { Link } from 'react-router-dom'

export default function User ({users}) {
    return (
        <div className="profile">
            {users && users.map(profile => (
            <div
              className='preview' 
              key={profile.avatar_url}
            >
              <div className='frame'></div>
              <div className="text">
                <div className="img-div"><img src={profile.avatar_url} alt="" /></div>
                  <p><span className='label'>username:</span> {profile.login}</p>
                  <p><span className='label'>score:</span> {profile.score}</p>
                  <p><span className='label'>profile type:</span> {profile.type}</p>
                  <Link to={`/${profile.login}/${profile.id}`}>View Repository</Link>
                </div>
              </div>
          ))
        }
        </div>
    );
}