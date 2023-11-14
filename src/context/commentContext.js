import React from 'react';
import PropTypes from 'prop-types';
import {useCommentsData} from '../hooks/useCommentsData';

export const commentContext = React.createContext({});

export const CommentContextProvider = ({children}) => {
  const [comment, setComment] = useCommentsData();

  return (
    <commentContext.Provider value={{comment, setComment}}>
      {children}
    </commentContext.Provider>
  );
};

CommentContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
