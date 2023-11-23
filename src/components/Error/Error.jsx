import React from 'react';
import style from './Error.module.css';
import {Text} from '../../UI/Text';

export const Error = props => (
  <div className={style.errorWrapper}>
    <Text as='p' size={20} color='red'>Запрашиваемая страница не существует</Text>
  </div>
);
