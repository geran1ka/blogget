import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  console.log('useCommentsData');
  const token = useSelector(state => {
    console.log('state: ', state);
    return state.token.token;
  });
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  console.log('status: ', status);
  const post = useSelector(state => state.comments.post);
  console.log('post: ', post);

  const dispatch = useDispatch();
  console.log('dispatch: ', dispatch);

  useEffect(() => {
    console.log('useCommentsDataDis');
    dispatch(commentsRequestAsync(id));
  }, [token, id]);


  return [comments, post, status];
};
