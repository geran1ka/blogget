import { useEffect, useState } from "react";
import style from "./Auth.module.css";
import { urlAuth } from "../../../api/auth";
import { Text } from "../../../UI/Text/Text";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../../store/tokenReducer";
import { useAuth } from "../../../hooks/useAuth";
import AuthLoader from "../../../UI/AuthLoader";
import { ErrorAuth } from "./ErrorAuth/ErrorAuth";
import { SVG } from "../../../UI/SVG/SVG";

export const Auth = () => {
  const dispatch = useDispatch();
  const [authError, setAuthError] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [auth, loading, clearAuth, error] = useAuth();
  useEffect(() => {
    if (error) setAuthError(true);
  }, [error]);

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
          <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
        </button>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <SVG iconName="login" className={style.svg} />
        </Text>
      )}
      {showLogout && (
        <button className={style.logout} onClick={logOut}>
          Выйти
        </button>
      )}
      {authError && (
        <ErrorAuth
          error={error}
          closePopup={() => {
            setAuthError(false);
          }}
        />
      )}
    </div>
  );
};
