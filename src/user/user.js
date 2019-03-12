import React from 'react';
import '../style.css';

const User = ({
  name,
  location,
  login,
  repositories,
  avatarUrl,
}) => (
  <div className="User">
    
    <h2>
    <img src={avatarUrl} ></img> {name},  {location}
    </h2>

    <div className="User login">
    <h3>{login}</h3>
    </div>

    <div className="number of repos">
    <h3>Repositories: {repositories.totalCount}</h3>
    </div>
  </div>
);

export default User;