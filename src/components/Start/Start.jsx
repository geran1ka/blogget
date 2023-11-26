import React from 'react';
import style from './Start.module.css';
import {Text} from '../../UI/Text';

export const Start = props => (
  <div className={style.start}>
    <Text
      As='h2'
      size={24}
    > Стартовая страница </Text>

    <Text
      As='p'
      size={20}
    > Добро пожаловать! </Text>

    <Text
      As='p'
      size={20}
    > Выберите категорию </Text>
  </div>
);
