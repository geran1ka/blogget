import React from 'react';
import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text/Text';
import {Time} from '../../Main/List/Post/Time/Time';

export const Comments = ({comments}) => (
  comments && <ul className={style.list}>
    {comments.map((item) => item.body && (
      <li key={item.id} className={style.item}>
        <Text As='h3' className={style.author} size={18} tsize={22}>
          {item.author === '[deleted]' ? 'Удалено' : item.author}
        </Text>
        <Text As='p' className={style.comment} size={14} tsize={18}>
          {item.body.replaceAll(`&gt;`, ' ')}
          {item.body === '[removed]' ? 'Удалено' : item.body}

        </Text>
        <Time date={item.created} />
      </li>
    ))}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
