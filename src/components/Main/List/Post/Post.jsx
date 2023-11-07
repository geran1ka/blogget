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
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <ImgPost thumbnail={notphoto} />
      <Content title={title} author={author}/>
      <Rating ups={ups} />
      <Time date={date} />
      <BtnDel />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};


