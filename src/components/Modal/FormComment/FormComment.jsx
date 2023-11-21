import React, {useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text/Text';
import {useDispatch, useSelector} from 'react-redux';
import {useAuth} from '../../../hooks/useAuth';
import {commentsUpdate} from '../../../store/comments/commentsAction';

export const FormComment = () => {
  const comment = useSelector(state => state.comments.comment);
  const dispatch = useDispatch();
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
    dispatch(commentsUpdate(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {isFormCommentOpen &&
    <>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea className={style.textarea} onChange={handleChange} ref={textareaRef} value={comment}></textarea>
    </>
      }
      <button className={style.btn} onClick={isFormCommentOpen ? handleSubmit : handleOpen}>
        {isFormCommentOpen ? 'Отправить' : 'Написать комментарий'}
      </button>
    </form>
  );
};
