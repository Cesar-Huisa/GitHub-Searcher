import React, { Fragment } from 'react';
import RepositoryItem from './item';
import '../style.css';

const RepositoryList = ({repositories}) => (
  <Fragment>
    {repositories.edges.map(({ node }) => (
      <div key={node.id} className="RepositoryItem">
        <RepositoryItem {...node} />
      </div>
    ))}
  </Fragment>
);

export default RepositoryList;