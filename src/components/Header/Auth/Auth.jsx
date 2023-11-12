import {useContext, useState} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {tokenContext} from '../../../context/tocenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    setShowLogout(false);
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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
