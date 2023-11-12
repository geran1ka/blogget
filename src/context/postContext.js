import React from 'react';
import PropTypes from 'prop-types';
import {usePost} from '../hooks/usePost';

export const postCoontext = React.createContext({});

export const PostContextProvider = ({children}) => {
  const [post, setPost] = usePost();

  return (
    <postCoontext.Provider value={{post, setPost}}>
      {children}
    </postCoontext.Provider>
  );
};

PostContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
