import React, {useState} from 'react';
import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {Modal} from '../../../../Modal/Modal';

export const Content = ({title, author, markdown}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text
          As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'
          onClick={() => {
            console.log('modal');
            setIsModalOpen(true);
          }}
        >
          {title}
        </Text>
      </Text>

      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
      {isModalOpen && <Modal markdown={markdown} title={title} author={author} />}
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
};

