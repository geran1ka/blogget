import React from 'react';
import style from './Authorization.module.css';
import {Text} from '../../UI/Text';

export const Authorization = props => (
  <div className={style.start}>
    <Text
      As='h2'
      size={24}
    >  Вы успешно авторизовались на сайте</Text>

    <Text
      As='p'
      size={20}
    > Через 5 секунд вы будете перемещены на главную страницу или выбирете категорию </Text>
  </div>
);
