import React from 'react';
import style from './NotFound.module.css';
import {Text} from '../../UI/Text';
import {useSelector} from 'react-redux';

export const NotFound = props => {
  const error = useSelector(state => state.posts.error);
  return (
    <div className={style.errorWrapper}>
      <Text as='p' size={20} color='orange'>Запрашиваемая страница не существует </Text>
      {error &&
        <Text As='p' size={18} color='orange'>{error.message}</Text>
      }
    </div>
  );
};
