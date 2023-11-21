import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {authLogout, authRequestAsync} from '../store/auth/authAction';


export const useAuth = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const auth = useSelector(state => state.auth.data);
  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
