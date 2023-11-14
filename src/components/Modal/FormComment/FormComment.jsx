import React from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';

export const FormComment = props => (
  <form className={style.form}>
    <Text As='h3' size={14} tsize={18}>Имя авторизированного пользователя</Text>
    <textarea className={style.textarea}></textarea>
    <button className={style.btn}>Отправить</button>
  </form>
);
