import React, {useEffect, useRef} from 'react';
import style from './List.module.css';
import Post from './Post';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../../../store/posts/postsAction';

export const List = () => {
  const posts = useSelector(state => state.posts.posts);

  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('вижу');
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);
  }, [endList.current]);
  return (
    <ul className={style.list}>
      {(posts.map(({data}) => (<Post key={data.id} postData={data} />)))}
      <li ref={endList} className={style.end}/>
    </ul>
  );
};
