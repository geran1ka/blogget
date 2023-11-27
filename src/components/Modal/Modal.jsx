import React, {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Text} from '../../UI/Text/Text';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
import {PostLoader} from '../../UI/PostLoader/PostLoader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, status, error] = useCommentsData(id);
  const hadleClick = (e) => {
    const target = e.target;
    if (
      target === overlayRef.current ||
        target.closest('svg') ||
        e.keyCode === 27
    ) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', hadleClick);
    document.addEventListener('click', hadleClick);
    return () => {
      document.removeEventListener('click', hadleClick);
      document.removeEventListener('keydown', hadleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && (<PostLoader />)}
        {status === 'error' && error.message}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{post?.title}</h2><div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {post?.selftext}
              </Markdown>
            </div>
            <Text As='p' className={style.author}>{post?.author}</Text>
            <FormComment />
            <Comments comments={comments} />
            <button className={style.close} onClick={() => {
              navigate(`/category/${page}`);
            }}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
};
