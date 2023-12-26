import React, {useEffect, useRef, useState} from 'react';
import style from './List.module.css';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';
import {postsSlice} from '../../../store/posts/postsSlice';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);
  console.log('posts: ', posts);
  const countLoadPage = useSelector(state => state.posts.countLoadPage);
  const endList = useRef(null);
  const dispatch = useDispatch();

  const [isLoad, setIsLoad] = useState(false);

  const {page} = useParams();
  useEffect(() => {
    dispatch(postsSlice.actions.changePage(page));
  }, [page]);

  useEffect(() => {
    if (isLoad) {
      dispatch(postRequestAsync());
      setIsLoad(false);
    }
  }, [isLoad]);

  useEffect(() => {
    if (countLoadPage < 2) {
      console.log('countLoadPage: ', countLoadPage);

      // eslint-disable-next-line space-unary-ops
      const observer = new IntersectionObserver((entries) => {
        console.log('entries: ', entries);
        if (entries[0].isIntersecting) {
          dispatch(postRequestAsync());
          console.log('dispatch: ', dispatch);
        }
      }, {
        rootMargin: '100px',
      });

      observer.observe(endList.current);

      return () => {
        if (endList.current) {
          observer.unobserve(endList.current);
        }
      };
    }
  }, [endList.current, countLoadPage]);
  return (
    <div className={style.flexContainer}>
      <ul className={style.list}>
        {(posts.map(({data}) => (<Post key={data.id} postData={data} />)))}
        <li ref={endList} className={style.end}/>
      </ul>
      {countLoadPage >= 2 &&
        <button
          className={style.btnLoad}
          type='button'
          onClick={() => setIsLoad(true)}
        > Загрузить еще</button>}
      <Outlet />
    </div>
  );
};
