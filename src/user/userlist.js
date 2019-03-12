import React, { Fragment } from 'react';
import User from './user'
import FetchMore from '../fetchmore';
import '../style.css';

const getUpdateQuery = entry => (
  previousResult,
  { fetchMoreResult },
) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    [entry]: {
      edges: [
        ...previousResult[entry].edges,
        ...fetchMoreResult[entry].edges,
      ],
    },
  };
};



const Userlist = ({ 
  search, 
  loading,
  entry,
  fetchMore,
}) =>(
  <Fragment>
    {search.edges.map(({ node }) => (
      <div key={search.id} className="User">
        <User {...node} />
      </div>
    ))}
    
    <FetchMore
      loading={loading}
      hasNextPage={search.pageInfo.hasNextPage}
      variables={{
        cursor: search.pageInfo.endCursor,
      }}
      updateQuery={getUpdateQuery(entry)}
      fetchMore={fetchMore}
    >
      search
    </FetchMore>
  </Fragment>
);

export default Userlist;