import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postRequestAsync} from '../store/posts/postsAction';


export const usePosts = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.posts.loading);
  console.log('loading: ', loading);
  const posts = useSelector(state => state.posts.posts);

  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [posts, loading];
};
