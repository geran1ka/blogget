import React, {useEffect, useRef, useState} from 'react';
import style from './List.module.css';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  const countLoadAfter = useSelector(state => state.posts.countLoadAfter);
  // const [isShowBtnLoad] = useState(false);
  const [isLoad, setIsload] = useState(false);

  const endList = useRef(null);
  const dispatch = useDispatch();

  const {page} = useParams();

  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);

  useEffect(() => {
    // eslint-disable-next-line space-unary-ops
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && countLoadAfter < 2) {
        dispatch(postRequestAsync());
      }
      if (entries[0].isIntersecting && countLoadAfter >= 2 && isLoad) {
        setIsload(false);
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current, isLoad);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        {(posts.map(({data}) => (<Post key={data.id} postData={data} />)))}
        <li ref={endList} className={style.end}>
          {countLoadAfter >= 2 && <button onClick={() => {
            setIsload(true);
          }} className={style.btnLoad} type='button'>Загрузить еще</button>}
        </li>
      </ul>
      <Outlet />
    </>
  );
};
