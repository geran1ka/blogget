import React from 'react';
import style from './List.module.css';
import Post from './Post';
import {usePost} from '../../../hooks/usePost';

export const List = () => {
  const [post] = usePost([]);
  console.log('post: ', post);
  const postData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nikcname1',
      ups: 77,
      date: '2023-11-07T09:45:00.000Z',
      id: '12'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nikcname2',
      ups: 58,
      date: '2023-11-08T10:45:00.000Z',
      id: '15'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nikcname3',
      ups: 24,
      date: '2023-11-09T11:45:00.000Z',
      id: '19'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nikcname4',
      ups: 24,
      date: '2023-11-10T12:45:00.000Z',
      id: '33'
    },
  ];

  return (
    <ul className={style.list}>
      {
        postData.map((postData, index) => <Post key={postData.id} postData={postData} />)
      }
      {
        [
          <Post key="1" postData={postData[0]} />,
          <Post key="2" postData={postData[1]} />,
          <Post key="3" postData={postData[2]} />,
          <Post key="4" postData={postData[3]} />,
        ]
      }
    </ul>
  );
};
