import React from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <h2 className={style.title}>
      <a className={style.linkPost} href='#'>
        {title}
      </a>
    </h2>

    <a className={style.linkAuthor} href='#'>
      {author}
    </a>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

