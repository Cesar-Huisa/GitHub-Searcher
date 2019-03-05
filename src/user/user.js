import React from 'react';
import '../style.css';

const User = ({
  name,
  login,
  location,
  repositories,
}) => (
  <div className="User details">
    <h1>
    ${name},${location}
    </h1>

    <div className="User login">
    <h2>${login}</h2>
    </div>

    <div className="number of repos">
    <h2>Repositories: ${repositories}</h2>
    </div>
  </div>
);

export default User;