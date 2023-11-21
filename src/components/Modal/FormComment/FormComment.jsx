import React, {useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';
// import {useSelector} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  // const value = useSelector(state => state.comment.comment);
  // const dispatch = useDispatch();
  const value = 'Привет';
  const [auth] = useAuth();

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

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {isFormCommentOpen &&
    <>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={style.textarea} onChange={handleChange} ref={textareaRef} value={value}></textarea>
    </>
      }
      <button className={style.btn} onClick={isFormCommentOpen ? handleSubmit : handleOpen}>
        {isFormCommentOpen ? 'Отправить' : 'Написать комментарий'}
      </button>
    </form>
  );
};
