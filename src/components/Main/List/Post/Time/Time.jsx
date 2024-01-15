import style from "./Time.module.css";
import PropTypes from "prop-types";
import formatDate from "../../../../../utils/formatDate.js";

export const Time = ({ date }) =>
  date && (
    <time className={style.date} dateTime={date}>
      {formatDate(date)}
    </time>
  );

Time.propTypes = {
  date: PropTypes.number,
};
