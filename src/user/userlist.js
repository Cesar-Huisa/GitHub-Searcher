import React from 'react';
import User from './user'
import '../style.css';

const Userlist = ({ users }) =>
  users.edges.map(({ node }) => (
    <div key={node.id} className="UserItem">
      <User {...node} />
    </div>
  ));

export default Userlist;