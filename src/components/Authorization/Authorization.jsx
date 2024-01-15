import React, { useEffect } from "react";
import style from "./Authorization.module.css";
import { Text } from "../../UI/Text";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Authorization = (props) => {
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);
  useEffect(() => {
    setTimeout(() => {
      if (!error) {
        navigate("/");
      } else {
        navigate("/auth");
      }
    }, 500);
  }, [error]);

  return (
    <div className={style.start}>
      <Text As="h2" size={24}>
        {error && error.response.status}
      </Text>

      <Text As="p" size={20}>
        {(error && error.response.statusText) || error.message || "Ошибка при авторизации!"}
      </Text>
    </div>
  );
};
