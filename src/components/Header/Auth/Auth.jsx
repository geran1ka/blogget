import {useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {useAuth} from '../../../hooks/useAuth';
import AuthLoader from '../../../UI/AuthLoader';

export const Auth = () => {
  const dispatch = useDispatch();

  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    setShowLogout(false);
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
          <AuthLoader />
        ) : auth.name ? (
        <button className={style.btn} onClick={getOut}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
          />
        </button>
    ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon className={style.svg} />
      </Text>
    )}
      { showLogout &&
        < button className={style.logout} onClick={logOut} >Выйти</button> }
    </div>
  );
};
