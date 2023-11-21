import React from 'react';
import style from './List.module.css';
import Post from './Post';
import {usePosts} from '../../../hooks/usePosts';
import {PostLoader} from '../../../UI/PostLoader/PostLoader';

export const List = () => {
  const [posts, loading] = usePosts();
  return (
    <ul className={style.list}>
      { loading ?
        (<PostLoader />) :
        (posts.map(({data}) => (<Post key={data.id} postData={data} />)))
      }
    </ul>
  );
};
