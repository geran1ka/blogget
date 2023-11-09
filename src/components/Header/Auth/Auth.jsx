import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const [auth, setAuth] = useAuth(token, delToken);

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={() => setIsLogoutVisible(!isLogoutVisible)}>
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
      { isLogoutVisible &&
        < button
          className={style.logout}
          onClick={() => {
            setIsLogoutVisible(false);
            setAuth({});
            delToken();
          }}
        >Выйти</button> }

    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
