import React, {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postCoontext} from '../../../context/postContext';

export const List = () => {
  const {post} = useContext(postCoontext);
  return (
    <ul className={style.list}>
      {
        post.map((postData) => {
          const {data} = postData;
          return <Post key={data.id} postData={data} />;
        })
      }
    </ul>
  );
};
