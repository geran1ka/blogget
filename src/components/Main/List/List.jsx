import React from 'react';
import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';

export const List = () => {
  const [posts] = usePosts();
  return (
    <ul className={style.list}>
      {posts && (
        posts.map(({data}) => <Post key={data.id} postData={data} />)
      )}
    </ul>
  );
};
