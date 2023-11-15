import React, {useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';

export const FormComment = () => {
  const textareaRef = useRef(null);
  const [isFormCommentOpen, setIsFormCommentOpen] = useState(false);

  const handleOpen = e => {
    e.preventDefault();
    setIsFormCommentOpen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(textareaRef.current.value);
    setIsFormCommentOpen(false);
  };

  return (
    <form className={style.form}>
      {isFormCommentOpen &&
    <>
      <Text As='h3' size={14} tsize={18}>Имя авторизированного пользователя</Text>
      <textarea className={style.textarea} ref={textareaRef}></textarea>
    </>
      }
      <button className={style.btn} onClick={isFormCommentOpen ? handleSubmit : handleOpen}>
        {isFormCommentOpen ? 'Отправить' : 'Написать комментарий'}
      </button>
    </form>
  );
};
