import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {Content} from './Content/Content';
import {Rating} from './Rating/Rating';
import {ImgPost} from './ImgPost/ImgPost';
import {Time} from './Time/Time';
import {BtnDel} from './BtnDel/BtnDel';

export const Post = ({postData}) => {
  console.log('postData: ', postData);
  const {thumbnail, title, author, ups, selftext: markdown, created: date} = postData;
  return (
    <li className={style.post}>
      <ImgPost thumbnail={
        thumbnail.match(/([^\s]+(?=\.(jpg|jpeg))\.\2)/) ?
        thumbnail : notphoto
      } title={title}/>
      <Content title={title} author={author} markdown={markdown}/>
      <Rating ups={ups} />
      <Time date={date} />
      <BtnDel />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};


