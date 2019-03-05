import './user.css';
import React from 'react';
import '../style.css';

const User = ({
  name,
  location,
  login,
  repositories,
  avatarUrl,
}) => (
  <div className="User details">
    
    <h1>
    <img src={avatarUrl} ></img> {name},{location}
    </h1>

    <div className="User login">
    <h2>{login}</h2>
    </div>

    <div className="number of repos">
    <h2>Repositories: {repositories.totalCount}</h2>
    </div>
  </div>
);

export default User;