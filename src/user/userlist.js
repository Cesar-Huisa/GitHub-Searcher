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
      ...previousResult[entry],
      search: {
        ...previousResult[entry].search,
        ...fetchMoreResult[entry].search,
        edges: [
          ...previousResult[entry].search.edges,
          ...fetchMoreResult[entry].search.edges,
        ],
      },
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