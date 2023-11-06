import React from 'react';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nikcname',
    ups: 24,
    date: '2023-11-06T09:45:00.000Z',
  };

  console.log(style);
  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
